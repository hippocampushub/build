import * as React from "react";
import {getHomePage, getPage} from "../helpers/dataHelper";
import PageContainer from "../components/page/pageContainer";
import {useEffect, useState} from "react";

import PageSection from "../components/page/pageSection";
import {makeStyles, Typography, withWidth, isWidthDown, debounce} from "@material-ui/core";
import {ContentCard} from "../components/cards/contentCard";
import * as pageStyle from './page.module.scss';
import pageContentStyle from "./page.module.scss";
import {useRouter} from "next/router";
import {SectionMenu} from "../components/menu/sectionMenu";
import {allowSectionsMenuMinHeight, isHeightUp} from "../helpers/uiHelper";


function _Page({params, width}) {
    const [page, setPage] = React.useState<any>({});

    const router = useRouter();

    const container: HTMLElement|null = window !== undefined ? window.document.body : null;
    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
    const [containerHeight, setContainerHeight] = React.useState(container?.clientHeight ?? 0);

    useEffect(() => {
        const hash: string = router?.asPath?.match(/#([a-z0-9]+)/gi)?.toString()
        if (!!hash) {
            console.log('@@@@@@scroll to hash', hash);
            setTimeout(() => {
                document.getElementById(hash.substr(1, hash.length - 1))?.scrollIntoView();
            }, 1000);
        }
    }, []);

    const buildPageSection = (section, index) => <PageSection sectionData={section}
                                                              variant={!!section.variant ? section.variant : (index % 2 === 0 ? 'light' : 'dark')}
                                                              asContainer={section?.asContainer ?? false}
    />



    const buildSectionsMenu = (sections = []) => {
        return <SectionMenu
                drawerOpen={drawerOpen}
                toggleDrawer={(open) => setDrawerOpen(open)}
                sections={sections}/>
    }

    const setup = async () => {
        const _page = await getPage(params.slug);
        setPage(_page);
    }

    const _showSectionsMenu = page?.enableSectionsMenu && !!page?.sections;
    const _sectionsContainerClasses = _showSectionsMenu &&  (isHeightUp(containerHeight, allowSectionsMenuMinHeight) ? 'col-lg-9  col-md-12 col-sm-12' : 'col-12');
    const _hasContentCards = (page?.content_cards ?? [])?.length > 0;

    const _showTitle = page?.showTitle ?? true;
    const _hasSections = !!page?.sections && page?.sections?.length > 0;

    const onSizeChanged = debounce(() => {
        setContainerHeight(container?.clientHeight ?? 0)
    }, 500);

    window.addEventListener('resize', onSizeChanged);

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={page.header_carousel ?? null}
            fixedHeader={true}
            transparentHeader={false}
            showDrawerToggleButton={_showSectionsMenu && isWidthDown('lg', width)}
            openDrawer={() => setDrawerOpen(true)}
            variant={page?.variant ?? 'light'}
            mainClassName={'with-fixed-header'}>
            <div className={`container ${pageContentStyle['page-container']}`}>
                {_showTitle ?
                    <div className="row">
                        <div className="col-12">
                            <Typography variant="h4" className={`${pageContentStyle['page-header-label']} text-center`}>
                                {page?.title}
                            </Typography>
                            <div className={pageContentStyle['page-header-divider']}/>
                        </div>
                    </div> : null
                }
                {_hasContentCards ?
                    <div className={`container ${pageStyle['page-container']}`}>
                        {(page?.content_cards ?? []).map((contentCard) => (
                            <div className='row' style={{marginBottom: 40}}>
                                <ContentCard title={contentCard?.title} content={contentCard?.content}
                                             actions={contentCard?.actions}/>
                            </div>
                        ))}
                    </div> : null
                }
                <div className='row'>
                    {_showSectionsMenu ?
                        buildSectionsMenu(page?.sections ?? []) : null
                    }
                    {_hasSections ?
                        <div className={_sectionsContainerClasses}>
                            {(page?.sections ?? []).map((item, index) => buildPageSection(item, index))}
                        </div> : null
                    }
                </div>
            </div>
        </PageContainer>
    );
}

const getStaticProps = ({params}) => ({
    props: {params}
});

const getStaticPaths = () => {
    return {
        paths: [{
            params: {
                slug: 'about',
            }
        }, {
            params: {
                slug: 'workflows',
            }
        }, {
            params: {
                slug: 'tutorial'
            }
        }],
        fallback: false
    }
}

export {
    getStaticProps,
    getStaticPaths
};

export default withWidth()(_Page);
