import * as React from "react";
import {getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";
import {useEffect, useState} from "react";

import pageContentStyle from './page.module.scss';

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
            <div className={`container ${pageContentStyle['page-container']}`}>
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

const getStaticProps = ({params}) => ({
    props: { params }
});

const getStaticPaths = () => {
    return {
        paths: [],
        fallback: false
    }
}

export {
    getStaticProps,
    getStaticPaths
};

export default Page;
