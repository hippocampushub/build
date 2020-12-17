import * as React from 'react'
import Page from '../components/page/page';
import {getConfig, getHomePage} from "../helpers/apiHelper";
import {getGlobalInitialProps} from "../helpers/propsHelper";


const Index = ({menuItems, config, homePage}) => {
    return (<Page
            config={config}
            carouselImages={homePage.header_images}
            menuItems={menuItems}>
            {homePage.content}
    </Page>
);
}

async function getServerSideProps() {
    const globalConfig = await getGlobalInitialProps();
    const homePage = await getHomePage();
    return {
        props: {
            homePage,
            config: globalConfig.config ?? {},
            menuItems: globalConfig?.menuItems ?? [],
        }
    }
}

export {
    getServerSideProps
};

export default Index;
