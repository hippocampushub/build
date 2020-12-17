import * as React from 'react';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";
import Head from "next/head";
import Header from "../header/header";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pageStyle from './page.module.scss'
import {CarouselImage} from "../carousel/carousel";
import Footer from "../footer/footer";

interface IPageProps extends DefaultComponentProps<any>{
    title?: string
    config?: any,
    menuItems?: any[],
    carouselImages?: CarouselImage[]
}

function PageContainer({children, title = 'Next.js App', config, menuItems, carouselImages}: IPageProps) {
    return (<div className={pageStyle.page}>
        <Head>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        </Head>
        <div className={`container-fluid ${pageStyle['main-page-container']}`}>
            <Header config={config.header} carouselImages={carouselImages} menuItems={menuItems}/>
            <div className='container'>
                <main className={pageStyle['main-container']}>
                    {children}
                </main>
            </div>
        </div>
        <Footer footer={config.footer}/>
    </div>);
}

export default PageContainer;
