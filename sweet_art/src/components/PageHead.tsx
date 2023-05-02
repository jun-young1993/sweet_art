import {title} from "@/lib/config";
import Head from "next/head"
export default ():Head => {
    console.log('title',title)
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />

            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefffe" key="theme-color-light"/>
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2d3439" key="theme-color-dark"/>

            <meta name='robots' content='index,follow' />
            <meta property='og:type' content='website' />
            <title>{title}</title>
        </Head>
    )
}