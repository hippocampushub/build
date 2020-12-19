import {getConfig, getHomePage, getMenuItems, getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";
import {getGlobalInitialProps} from "../helpers/propsHelper";
import * as React from "react";
import {useState} from "react";

function Page({params}) {
    const [menuItems, setMenuItems] = React.useState<any[]>([]);
    const [config, setConfig] = React.useState<any>({});
    const [page, setPage] = React.useState<any>({});

    const setup = async () => {
        const _menuItems = await getMenuItems();
        const _config = await getConfig();
        const _page = await getPage(params.slug);
        setMenuItems(_menuItems);
        setConfig(_config);
        setPage(_page);
    }

    useState(() => {
        setup();
    }, []);

    return (
        <PageContainer
            config={config}
            menuItems={menuItems}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h4">
                            {page.title}
                        </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {page.content}
                    </div>
                </div>
            </div>
        </PageContainer>);
}

const getServerSideProps = ({params}) => ({
    props: { params }
});

export {
    getServerSideProps
};

export default Page;
