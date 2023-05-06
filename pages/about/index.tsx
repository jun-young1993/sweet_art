
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

export const getStaticProps = async () => {
  const props = await resolveNotionPage(domain,process.env.NEXT_PUBLIC_NOTION_ABOUT_ME_PAGE_KEY)
  return {props}
}
export default (props:any) :JSX.Element => {
    // return <NotionPage {...props} />

    console.log('props',props)
    return (
    <>
      <PageHeader />
      <NotionPage {...props} />
    </>
    )
}
