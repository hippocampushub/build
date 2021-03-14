import * as React from 'react';
import {connect} from 'react-redux';
import Head from "next/head";

import Header from "../header/header";
import pageStyle from './page.module.scss'
import {CarouselImage} from "../carousel/carousel";
import Footer from "../footer/footer";
import {getConfig, getHomePage, getMenuItems} from "../../helpers/dataHelper";
import {forwardRef, PropsWithChildren, useEffect} from "react";
import {TosOverlay} from "../tos-overlay/tosOverlay";
import {tosAgree} from "../../actions/tos.actions";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

interface IPageProps extends PropsWithChildren<any>{
    title?: string;
    config?: any;
    menuItems?: any[];
    headerCarousel?: CarouselImage[];
    fixedHeader?: boolean;
    transparentHeader?: boolean;
    variant?: 'light'|'dark';
    agreeTos: () => void;
    tosAgreed: boolean;
    mainClassName: string|null;
}

function _PageContainer(props: IPageProps, ref) {
    const {children, title = 'Hippocampus Facility Hub', headerCarousel} = props;
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

    const _agreeTos = () => {
        if (!!props?.tosAgree) {
            props?.tosAgree();
        }
    }

    return (<div className={`${pageStyle.page} ${pageStyle[props?.variant ?? 'light'] ?? ''}`}>
        <Head>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://www.hippocampushub.eu/shared_css/main.min.css" rel="stylesheet" />
        </Head>
        <div className={`container-fluid ${pageStyle['main-page-container']}`}>
            <Header
                config={config.header}
                carouselImages={headerCarousel}
                menuItems={menuItems}
                fixedHeader={props.fixedHeader ?? false}
                transparentHeader={props.transparentHeader ?? false}/>
            <div>
                <main className={`${pageStyle['main-container']} ${!!props?.mainClassName ? pageStyle[props?.mainClassName] : ''}`}>
                    {children}
                </main>
            </div>
        </div>
        {!props?.tosAgreed ?
            <TosOverlay tos={config?.tos ?? null} agreeTos={props.agreeTos}/> : null
        }
        <Footer footer={config.footer}/>
    </div>);
}

const mapStateToProps = (state, props) => ({
   tosAgreed: state?.tos?.agree ?? false
});

const mapDispatchToProps = (dispatch) => ({
   agreeTos: () => dispatch(tosAgree())
});

const PageContainer = forwardRef((props: IPageProps, ref) => _PageContainer(props, ref));

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
