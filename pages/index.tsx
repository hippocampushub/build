import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import {getConfig, getHomePage, getMenuItems} from "../helpers/dataHelper";
import {useEffect, useState} from "react";


const Index = () => {
    const [homePage, setHomePage] = React.useState<any>({});

    const setup = async () => {
        const _homePage = await getHomePage();
        setHomePage(_homePage);
    }

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            carouselImages={homePage.header_images}>
            {homePage.content}
    </PageContainer>
    );
}

export default Index;
