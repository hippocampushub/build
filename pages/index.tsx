import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import PageSection from '../components/page/pageSection';
import {getConfig, getHomePage, getMenuItems} from "../helpers/dataHelper";
import {ImageCreditsDialog} from "../components/dialogs/imageCreditsDialog";
const {useEffect, useState} = React;


const Index = () => {
    const [homePage, setHomePage] = React.useState<any>({});
    const [openImageCreditsDialog, setOpenImageCreditsDialog] = React.useState(false);
    const [imageCreditsContent, setImageCreditsContent] = React.useState<any>('');

    const buildPageSection = (section, index) => <PageSection sectionData={section}
                                                              openImageCreditsDialog={_openImageCreditsDialog}
                                                              variant={!!section.variant ? section.variant : (index % 2 === 0 ? 'light' : 'dark')}
                                                              asContainer={section?.asContainer ?? false}/>

    const setup = async () => {
        const _homePage = await getHomePage();
        setHomePage(_homePage);
    }

    const _openImageCreditsDialog = (content: string) => {
        setOpenImageCreditsDialog(true);
        setImageCreditsContent(content);
    }

    const _closeImageCreditsDialog = () => {
        setOpenImageCreditsDialog(false);
        setOpenImageCreditsDialog(null);
    }

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={homePage.header_carousel}
            fixedHeader={true}
            transparentHeader={true}
            openImageCreditsDialog={_openImageCreditsDialog}>
            {(homePage?.sections ?? []).map((item, index) => buildPageSection(item , index))}

            <ImageCreditsDialog open={openImageCreditsDialog} content={imageCreditsContent} onClose={_closeImageCreditsDialog}/>
        </PageContainer>
    );
}

export default Index;
