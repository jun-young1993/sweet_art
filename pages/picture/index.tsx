import PageHeader from "@/components/PageHeader";
import {NotionPage} from "@/components/NotionPage";
import PicturePreview from "@/components/PicturePreview";
import {resolveNotionPage} from "@/lib/resolve-notion-page";
import {domain} from "@/lib/config";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {NotionDatabase} from "@/lib/notion-client";
interface PictureViewInterface {
    data : QueryDatabaseResponse
}
export const getStaticProps = async () => {
    const data:QueryDatabaseResponse = await NotionDatabase({
        database_id : process.env.NEXT_PUBLIC_NOTION_PICTURE_DATABASES_KEY,
    })
    return {
        props : {
            data :data
        }
    }
}
export default (props:PictureViewInterface) :JSX.Element => {
    // return <NotionPage {...props} />


    const {data} = props;

    return (
        <>
            <PageHeader />
            <PicturePreview
                // data={a}
                data={data.results.map((result) => {

                    // @ts-ignore
                    const property = result?.properties
                    return {
                        id : property?.id,
                        name: property?.name?.title[0]?.text?.content,
                        description: property?.description?.rich_text[0]?.text?.content,
                        imageSrc: property?.image?.files[0]?.file?.url,
                        imageAlt: property?.imageAlt?.rich_text[0]?.text?.content,
                        href: '#',
                    }
                })}
            />
        </>
    )
}
