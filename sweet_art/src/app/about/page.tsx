
import PageHead from "@/components/PageHead";


import {NotionApi} from "notion-client"
import { NotionRenderer } from 'react-notion-x'
export async function getStaticProps() {
    const notion = new NotionAPI()

    const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')
    return {
      props: {
        recordMap: recordMap
      }
    };
  }
export default ({ recordMap }) :JSX.Element => {
    return(
    <>
        <PageHead />
        <NotionRenderer recordMap={recordMap} />
    </>
    )
}