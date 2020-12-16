import * as React from 'react'
import Page from '../components/page/page';
import {getMenuItemsProps} from "../helpers/propsHelper";
import {getHomePage} from "../helpers/apiHelper";

import indexStyle from './index.module.scss';

const Index = ({homePage, menuItems}) => {
    return (<Page carouselImages={homePage.header_images} menuItems={menuItems}>
            {homePage.content}
    </Page>
);
}

async function getServerSideProps() {
    const menuItems = await getMenuItemsProps();
    const homePage = await getHomePage();
    return {
        props: {
            homePage,
            menuItems
        }
    }
}

export {
    getServerSideProps
};

export default Index;
