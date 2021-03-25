import * as React from "react";
import {getHomePage, getPage} from "../helpers/dataHelper";
import PageContainer from "../components/page/pageContainer";
import {useEffect, useState} from "react";

import PageSection from "../components/page/pageSection";
import {makeStyles} from "@material-ui/core";
import {CustomButton} from "../components/buttons/buttons";

const useStyles = makeStyles((theme) => ({
    sectionsMenuContainer: {
        position: 'fixed'
    },
    sectionsMenu: {

    }
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

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={page.header_carousel ?? null}
            fixedHeader={true}
            transparentHeader={false}
            mainClassName={'with-fixed-header'}>
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
