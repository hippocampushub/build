import * as React from "react";
import {getHomePage, getPage} from "../helpers/dataHelper";
import PageContainer from "../components/page/pageContainer";
import {useEffect, useState} from "react";

import PageSection from "../components/page/pageSection";
import {makeStyles, Typography} from "@material-ui/core";
import {CustomButton} from "../components/buttons/buttons";
import {ContentCard} from "../components/cards/contentCard";
import * as pageStyle from './page.module.scss';
import pageContentStyle from "./page.module.scss";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
    sectionsMenuContainer: {
        position: 'fixed',
        paddingBottom: 600
    },
    sectionsMenu: {}
}));

function Page({params}) {
    const [page, setPage] = React.useState<any>({});

    const classes = useStyles();

    const router = useRouter();

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
        return (<div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center'>
            <div className={classes.sectionsMenuContainer}>
                <div className={classes.sectionsMenu}>
                    <div className='row'>
                        {sections?.map((item) => <div className='col-lg-12 col-md-6 col-sm-6 text-center'>
                            <CustomButton
                                style={{fontSize: 11, margin: '5px auto'}}
                                onClick={() => window.location.href = `#${item?.id}`}>
                                {item?.header}
                            </CustomButton>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>);
    }

    const setup = async () => {
        const _page = await getPage(params.slug);
        setPage(_page);
    }

    const _showSectionsMenu = page?.enableSectionsMenu && !!page?.sections;
    const _sectionsContainerClasses = _showSectionsMenu ? 'col-lg-9  col-md-6 col-sm-6' : 'col-12';
    const _hasContentCards = (page?.content_cards ?? [])?.length > 0;

    const _showTitle = page?.showTitle ?? true;
    const _hasSections = !!page?.sections && page?.sections?.length > 0;

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={page.header_carousel ?? null}
            fixedHeader={true}
            transparentHeader={false}
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
        }],
        fallback: false
    }
}

export {
    getStaticProps,
    getStaticPaths
};

export default Page;
