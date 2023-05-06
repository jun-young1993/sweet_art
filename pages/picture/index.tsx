import PageHeader from "@/components/PageHeader";
import {NotionPage} from "@/components/NotionPage";
import PicturePreview from "@/components/PicturePreview";
import {resolveNotionPage} from "@/lib/resolve-notion-page";
import {domain} from "@/lib/config";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {notion} from "@/lib/notion-client";
interface PictureViewInterface {
    data : QueryDatabaseResponse
}
export const getStaticProps = async () => {
    const data:QueryDatabaseResponse = await notion.databases.query({
        database_id : process.env.NEXT_PUBLIC_NOTION_PICTURE_DATABASES_KEY
    })
    return {
        props : {
            data :data
        }
    }
}
export default (props:PictureViewInterface) :JSX.Element => {
    // return <NotionPage {...props} />

    const a = [
        {
            name: 'Desk and Office',
            description: 'Work from home accessories',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Self-Improvement',
            description: 'Journals and note-taking',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]
    const {data} = props;
    console.log(data)
    return (
        <>
            <PageHeader />
            <PicturePreview
                // data={a}
                data={data.results.map((result) => {

                    // @ts-ignore
                    const property = result?.properties
                    return {
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
