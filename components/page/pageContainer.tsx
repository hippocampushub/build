import * as React from 'react';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";
import Head from "next/head";
import Header from "../header/header";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pageStyle from './page.module.scss'
import {CarouselImage} from "../carousel/carousel";
import Footer from "../footer/footer";
import {getConfig, getHomePage, getMenuItems} from "../../helpers/dataHelper";
import {forwardRef, PropsWithChildren, useEffect} from "react";

interface IPageProps extends PropsWithChildren<any>{
    title?: string
    config?: any,
    menuItems?: any[],
    headerCarousel?: CarouselImage[]
}

function _PageContainer(props: IPageProps, ref) {
    const {children, title = 'HBP Project', headerCarousel} = props;
    const [menuItems, setMenuItems] = React.useState<any[]>([]);
    const [config, setConfig] = React.useState<any>({});

    const setup = async () => {
        const _menuItems = await getMenuItems();
        const _config = await getConfig();
        setMenuItems(_menuItems);
        setConfig(_config);
    }

    useEffect(() => {
        setup();
    }, []);

    return (<div className={pageStyle.page}>
        <Head>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://www.hippocampushub.eu/shared_css/main.min.css" rel="stylesheet" />
        </Head>
        <div className={`container-fluid ${pageStyle['main-page-container']}`}>
            <Header config={config.header} carouselImages={headerCarousel} menuItems={menuItems}/>
            <div>
                <main className={pageStyle['main-container']}>
                    {children}
                </main>
            </div>
        </div>
        <Footer footer={config.footer}/>
    </div>);
}

const PageContainer = forwardRef((props: IPageProps, ref) => _PageContainer(props, ref));

export default PageContainer;
