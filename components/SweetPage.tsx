
import PageHeader from "@/components/PageHeader";
import {Carousel} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {NotionDatabase} from "@/lib/notion-client";
import {NotionPage} from "@/components/NotionPage";
import { favicon } from "@/lib/config";
interface SweetViewInterface {
    data : QueryDatabaseResponse
    recordMap : any
}

export default (props:SweetViewInterface):JSX.Element => {
    const {data,recordMap} = props
    return(
    <>
        <PageHeader />
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <ThemeProvider>
                <Carousel className="rounded-xl"
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                >
                    {data?.results?.map((result) => {
                        // @ts-ignore
                        const property = result?.properties

                        return <img
                            key={result?.id}
                            src={property?.image?.files[0]?.file?.url}
                            alt={property?.imageAlt?.rich_text[0]?.text?.content}
                            className="h-full w-full object-cover"
                        />
                    })}
                </Carousel>
            </ThemeProvider>
        </div>
        {/*<img className="h-auto max-w-full" src={`/${favicon}`} alt="image description" />*/}
        <NotionPage {...recordMap} />
    </>
    )
}
