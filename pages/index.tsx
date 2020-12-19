import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import {getConfig, getHomePage, getMenuItems} from "../helpers/dataHelper";
import {useState} from "react";


const Index = () => {
    const [menuItems, setMenuItems] = React.useState<any[]>([]);
    const [config, setConfig] = React.useState<any>({});
    const [homePage, setHomePage] = React.useState<any>({});

    const setup = async () => {
        const _menuItems = await getMenuItems();
        console.log('@@@@menuItems');
        console.log(_menuItems);
        const _config = await getConfig();
        const _homePage = await getHomePage();
        setMenuItems(_menuItems);
        setConfig(_config);
        setHomePage(_homePage);
    }

    useState(() => {
        setup();
    }, []);
    return (<PageContainer
            config={config}
            carouselImages={homePage.header_images}
            menuItems={menuItems}>
            {homePage.content}
    </PageContainer>
    );
}

export default Index;
