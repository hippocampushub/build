import * as React from 'react';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";
import Head from "next/head";
import Header from "../header/header";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

interface IPageProps extends DefaultComponentProps<any>{
    title?: string
    menuItems?: any[]
}

function Page({children, title = 'Next.js App', menuItems}: IPageProps) {
    console.log('@@@@@title');
    console.log(title);
    return (<div>
        <Head>
            <title>{title}</title>
        </Head>
        <div className='container-fluid'>
            <Header menuItems={menuItems}/>
            <div className='container'>
                {children}
            </div>
        </div>
    </div>);
}

export default Page;
