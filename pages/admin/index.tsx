
// "use client";
import 'react-notion-x/src/styles.css'
import PageHeader from '@/components/PageHeader'
import { Input } from "@material-tailwind/react";
import { ChangeEvent, useEffect, useState } from 'react'
import {  useRouter } from 'next/router'
import {ParsedUrlQuery, parse as urlParse} from 'querystring'
import axios, { AxiosProgressEvent } from 'axios';
import { api } from '@/lib/config';

// export const getStaticProps = async () => {
//   const props = await resolveNotionPage(domain,process.env.NEXT_PUBLIC_NOTION_ABOUT_ME_PAGE_KEY)
//   return {props}
// }
const TextInputList: string[] = ['title','description','imageAlt']
const initValues:{[key:string] : string} = {
  'title' : '',
  'description' : '',
  'imageAlt' : '',
  'image' : ''
}
const initMsalAuthInfo:ParsedUrlQuery = {
  access_token : null,
  expires_in : null,
  scope : null,
  token_type : null,
  user_id : null
}
const msalAuthUri2: string = `https://login.live.com/oauth20_authorize.srf?client_id=${process.env.NEXT_PUBLIC_MSAL_CLIENT_ID}&scope=${process.env.NEXT_PUBLIC_MSAL_SCOPE}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_MSAL_REDIRECT_URI}`
const msalAuthUri: string =  `https://login.microsoftonline.com/consumers/oauth2/v2.0/token`
export default (props:any) :JSX.Element => {
    // return <NotionPage {...props} />

    console.log('props',props)
    const {asPath} = useRouter()
    const hash  = (asPath as string)
    const parseHash:ParsedUrlQuery = urlParse(hash.split('#')[1])
    
    // const accessToken: string|string[] = parseHash.access_token
    

    
    const [authInfo,setAuthInfo] = useState(initMsalAuthInfo)
    const [values, setValues] = useState(initValues)
    const [progress, setProgress] = useState<number>(0);
    const handleTextInputChange = (e:ChangeEvent<HTMLInputElement>) => {
      const textInputId:string = e.target.getAttribute('id')
      setValues({...values,...{
        [textInputId] : e.target.value
      }});
    }
    const uploadFile = async (file:File) => {
      const formData = new FormData()
      formData.append('file',file)
      
 
      axios.post(api.simpleUpload,formData,{
        headers: { 
          "content-type": "multipart/form-data" ,
          "access-token" : authInfo.access_token
        },
        onUploadProgress(progressEvent:AxiosProgressEvent) {
          console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        },
      })
      .then((resolve) => {
        console.log("resolve",resolve)
      })
      
    }
    const handleFileInputChange = (e:ChangeEvent<HTMLInputElement>) => {
      const [file] = [...e.target.files]
      uploadFile(file)
      console.log(file)
    }
    console.log('start')

    axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token',{
      client_id : process.env.NEXT_PUBLIC_MSAL_CLIENT_ID,
      code : 'code',
      redirect_uri : process.env.NEXT_PUBLIC_MSAL_REDIRECT_URI,
      scope: process.env.NEXT_PUBLIC_MSAL_SCOPE,
      grant_type : "authorization_code",
      client_secret : "nym8Q~rywAT0MUOVHF1oWym_-gyoT_1ZX9K.~apA"
    })
    .then((resolve) => {
      console.log("resolve",resolve)
    })
    .catch((exception) => {
      console.log("exeption",exception)
    })
    useEffect(()=>{
  
      if(JSON.stringify(parseHash) === '{}'){
        // window.location.href = msalAuthUri
    
      }else{
        setAuthInfo(parseHash)
      }   
    },[])
    
    return (
    <>
      <PageHeader />
      {authInfo.access_token ? 
        <div className="flex">
          <div className="grow-0 w-20" />

          <div className="grow-1 w-full">
            {TextInputList.map((textInput:string) => (
              <>
                <Input
                    label={textInput}
                    // placeholder="@horizon.ui"
                    id={textInput}
                    type="text" 
                    nonce={undefined} 
                    onResize={undefined} 
                    onResizeCapture={undefined}   
                    onChange={handleTextInputChange}     
                />
                <br />
              </>
            ))}
            <Input
                label="image"
                type="file" 
                nonce={undefined} 
                onResize={undefined} 
                onResizeCapture={undefined}   
                onChange={handleFileInputChange}     
            />
            <div>
          
          </div>
          </div>
          <div className="grow-0 w-20" />
          
        </div>
      :
        <>no auth</>
        // <button onClick={()=>{
        //   window.location.href = 'https://login.live.com/oauth20_authorize.srf?client_id=619c1ad8-3ff8-4d5b-b15a-5a0f18c724fd&scope=User.Read&response_type=token&redirect_uri=http://localhost:3000/admin'
        // }}>click</button>
      }
      
    </>
    )
}
