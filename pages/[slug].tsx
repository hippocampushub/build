import * as React from "react";
import {getHomePage, getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";
import {useEffect, useState} from "react";

import pageContentStyle from './page.module.scss';
import PageSection from "../components/page/pageSection";

function Page({params}) {
    const [page, setPage] = React.useState<any>({});

    const buildPageSection = (section, index) => <PageSection sectionData={section}
                                                              variant={!!section.variant ? section.variant : (index % 2 === 0 ? 'light' : 'dark')}
                                                              asContainer={section?.asContainer ?? false}
    />

    const setup = async () => {
        const _page = await getPage(params.slug);
        setPage(_page);
    }

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={page.header_carousel ?? null}
            fixedHeader={true}
            transparentHeader={false}
            mainClassName={'with-fixed-header'}>
            {(page?.sections ?? []).map((item, index) => buildPageSection(item , index))}
        </PageContainer>
    );
}

const getStaticProps = ({params}) => ({
    props: { params }
});

const getStaticPaths = () => {
    return {
        paths: [{
            params: {
                slug: 'about'
            }
        }],
        fallback: false
    }
}

export {
    getStaticProps,
    getStaticPaths
};

export default Page;
