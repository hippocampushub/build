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

const useStyles = makeStyles((theme) => ({
    sectionsMenuContainer: {
        position: 'fixed'
    },
    sectionsMenu: {}
}));

function Page({params}) {
    const [page, setPage] = React.useState<any>({});

    const classes = useStyles();

    const buildPageSection = (section, index) => <PageSection sectionData={section}
                                                              variant={!!section.variant ? section.variant : (index % 2 === 0 ? 'light' : 'dark')}
                                                              asContainer={section?.asContainer ?? false}
    />

    const buildSectionsMenu = (sections = []) => {
        return (<div className='col-3 d-flex justify-content-center'>
            <div className={classes.sectionsMenuContainer}>
                <div className={classes.sectionsMenu}>
                    {sections?.map((item) => <CustomButton style={{fontSize: 11, marginTop: 10}}
                                                           onClick={() => window.location.href = `#${item?.id}`}>
                        {item?.header}
                    </CustomButton>)}
                </div>
            </div>
        </div>);
    }

    const setup = async () => {
        const _page = await getPage(params.slug);
        setPage(_page);
    }

    const _showSectionsMenu = page?.enableSectionsMenu && !!page?.sections;
    const _sectionsContainerClasses = _showSectionsMenu ? 'col-9' : 'col-12';
    const _hasContentCards = (page?.content_cards ?? [])?.length > 0;

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
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h4" className={`${pageContentStyle['page-header-label']} text-center`}>
                            {page.title}
                        </Typography>
                        <div className={pageContentStyle['page-header-divider']}/>
                    </div>
                </div>
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
                    {_showSectionsMenu ?
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
