import {Client} from "@notionhq/client";
import {QueryDatabaseParameters, QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
export const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY,
})



export const NotionDatabase = async (args:QueryDatabaseParameters): Promise<QueryDatabaseResponse> => {

    return await notion.databases.query({
        ...(args)
    })
}