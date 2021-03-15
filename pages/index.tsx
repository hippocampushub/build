import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import PageSection from '../components/page/pageSection';
import {getConfig, getHomePage, getMenuItems} from "../helpers/dataHelper";
const {useEffect, useState} = React;


const Index = () => {
    const [homePage, setHomePage] = React.useState<any>({});

    const buildPageSection = (section, index) => <PageSection sectionData={section}
                                                              variant={!!section.variant ? section.variant : (index % 2 === 0 ? 'light' : 'dark')}
                                                              asContainer={section?.asContainer ?? false}/>

    const setup = async () => {
        const _homePage = await getHomePage();
        setHomePage(_homePage);
    }

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={homePage.header_carousel}
            fixedHeader={true}
            transparentHeader={true}>
            {(homePage?.sections ?? []).map((item, index) => buildPageSection(item , index))}
        </PageContainer>
    );
}

export default Index;
