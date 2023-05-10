import multer  from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import {Request, RequestHandler} from 'express'
import { createReadStream } from 'fs';

const oneDriveApi = require('onedrive-api')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
const upload = multer({
  //  dest: 'uploads/' 
  storage: storage
});

function runMiddleware(req, res, fn:RequestHandler):Promise<Express.Multer.File> {

  return new Promise((resolve, reject) => {
    // console.log(req.bodyParser)
    // console.log(req.body)
    // console.log(req)
    fn(req, res, (result) => {
      const file = req.file as Express.Multer.File
      // console.log(req.headers["access-token"],file.originalname,createReadStream(file.path))

      if (result instanceof Error) {
        return reject(result)
      }
      
      return resolve(file)
    })
  })
}

async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
        
     const uploadedFile = await runMiddleware(req, res, upload.single("file"))
     const cloudeUploaded = await oneDriveApi.items.uploadSimple({
       accessToken : req.headers["access-token"],
       filename : uploadedFile.originalname,
       readableStream : createReadStream(uploadedFile.path)
     })
     console.log(cloudeUploaded)
  } catch (e) {
   /* handle error */
  }
  return res.json({ message: 'Hello Everyone!' })
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler