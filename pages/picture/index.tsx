import PageHeader from "@/components/PageHeader";
import {NotionPage} from "@/components/NotionPage";
import PicturePreview from "@/components/PicturePreview";

export default (props:any) :JSX.Element => {
    // return <NotionPage {...props} />

    console.log('props',props)
    return (
        <>
            <PageHeader />
            <PicturePreview />
        </>
    )
}
