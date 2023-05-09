import multer  from 'multer';

const upload = multer({ dest: 'uploads/' });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      console.log(result)
      return resolve(result)
    })
  })
}

async function handler(req, res) {
  try {
	console.log(upload.single("file"))
     await runMiddleware(req, res, upload.single("file"))
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