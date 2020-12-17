import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import {getConfig, getHomePage} from "../helpers/apiHelper";
import {defaultProps, getGlobalInitialProps} from "../helpers/propsHelper";


const Index = ({menuItems, config, homePage}) => {
    return (<PageContainer
            config={config}
            carouselImages={homePage.header_images}
            menuItems={menuItems}>
            {homePage.content}
    </PageContainer>
    );
}

async function getServerSideProps() {
    try {
        const globalConfig = await getGlobalInitialProps();
        const homePage = await getHomePage();
        return {
            props: {
                homePage,
                config: globalConfig.config ?? {},
                menuItems: globalConfig?.menuItems ?? [],
            }
        }
    } catch (error) {
        return {
            props: {...defaultProps}
        }
    }
}

export {
    getServerSideProps
};

export default Index;
