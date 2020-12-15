import * as React from 'react'
import Page from '../components/page/page';
import {getMenuItemsProps} from "../helpers/propsHelper";
import {getHomePage} from "../helpers/apiHelper";


const Index = ({homePage, menuItems}) => {
    return (<Page menuItems={menuItems}>
        <main>
            {homePage.content}
        </main>
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
