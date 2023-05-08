
// "use client";
import 'react-notion-x/src/styles.css'
import PageHead from "@/components/PageHeader"
import { ExtendedRecordMap } from "notion-types"
import { notion } from "@/lib/notion-api"


import { NotionRenderer } from 'react-notion-x'
import { getPage } from '@/lib/notion';
import { NotionPage } from '@/components/NotionPage'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import PageHeader from '@/components/PageHeader'
import { domain } from '@/lib/config'
import { Input } from "@material-tailwind/react";
import { useState } from 'react'
import { useRouter } from 'next/router'
// export const getStaticProps = async () => {
//   const props = await resolveNotionPage(domain,process.env.NEXT_PUBLIC_NOTION_ABOUT_ME_PAGE_KEY)
//   return {props}
// }
export default (props:any) :JSX.Element => {
    // return <NotionPage {...props} />

    console.log('props',props)
    const {asPath} = useRouter()
    const hash  = (asPath as string).split('#')[1];
    const parseHash = new URLSearchParams(hash)
    console.log('hash',hash)
    console.log('window.localtion.hash',parseHash.get('access_token'))
    const [values, setValues] = useState({
      'title' : '',
      'description' : '',
      'imageAlt' : '',
      'image' : ''
    })
    return (
    <>
      <PageHeader />
      <div className="flex">
        <div className="grow-0 w-20" />

        <div className="grow-1 w-full">
          <Input
              label="title"
              // placeholder="@horizon.ui"
              // id="email"
              type="text" 
              nonce={undefined} 
              onResize={undefined} 
              onResizeCapture={undefined}   
              onChange={(e)=>{

              }}     
          />
          <br />
          <Input
              label="description"
              // placeholder="@horizon.ui"
              // id="email"
              type="text" 
              nonce={undefined} 
              onResize={undefined} 
              onResizeCapture={undefined}   
              onChange={(e)=>{

              }}     
          />
          <br />
          <Input
              label="imageAlt"
              // placeholder="@horizon.ui"
              // id="email"
              type="text" 
              nonce={undefined} 
              onResize={undefined} 
              onResizeCapture={undefined}   
              onChange={(e)=>{

              }}     
          />
          <br />
          <Input
              label="image"
              // placeholder="@horizon.ui"
              // id="email"
              type="file" 
              nonce={undefined} 
              onResize={undefined} 
              onResizeCapture={undefined}   
              onChange={(e)=>{
                console.log(e);
              }}     
          />
          <div>
        <button onClick={()=>{
          window.location.href = 'https://login.live.com/oauth20_authorize.srf?client_id=619c1ad8-3ff8-4d5b-b15a-5a0f18c724fd&scope=User.Read&response_type=token&redirect_uri=http://localhost:3000/admin'
        }}>click</button>
        </div>
        </div>
        <div className="grow-0 w-20" />
        
      </div>
    </>
    )
}
