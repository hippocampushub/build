import {getConfig, getHomePage, getMenuItems, getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";
import {getGlobalInitialProps} from "../helpers/propsHelper";
import * as React from "react";
import {useEffect, useState} from "react";

function Page({params}) {
    const [page, setPage] = React.useState<any>({});

    const setup = async () => {
        const _page = await getPage(params.slug);
        setPage(_page);
    }

    useEffect(() => {
        setup();
    }, []);

    return (
        <PageContainer>
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
