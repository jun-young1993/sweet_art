import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import SweetPage from '@/components/SweetPage'
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {NotionDatabase} from "@/lib/notion-client";

export const getStaticProps = async () => {
  try {
    const data:QueryDatabaseResponse = await  NotionDatabase({
      database_id : process.env.NEXT_PUBLIC_NOTION_PICTURE_DATABASES_KEY,
      page_size : 5
    })
    const recordMap = await resolveNotionPage(domain,process.env.NEXT_PUBLIC_NOTION_MAIN_PAGE_KEY)
    // const props = await resolveNotionPage(domain)

    return { props : { data : data, recordMap : recordMap}}
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function Home(props:any) {
  return <SweetPage {...props}/>
}
