import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import {getConfig, getHomePage2, getMenuItems} from "../helpers/dataHelper";
import {ImageCreditsDialog} from "../components/dialogs/imageCreditsDialog";
import {ColumnBlock} from "../components/blocks/columnBlock";
import * as pageStyle from './home-page2.module.scss';

const {useEffect, useState} = React;


const Index2 = () => {
    const [homePage, setHomePage] = React.useState<any>({});
    const [openImageCreditsDialog, setOpenImageCreditsDialog] = React.useState(false);
    const [imageCreditsContent, setImageCreditsContent] = React.useState<any>('');

    const buildColumnBlock = (block, columnClassName, index) => <ColumnBlock
        block={block} columnClass={columnClassName} variant={`color-${index + 1}`}/>

    const setup = async () => {
        const _homePage = await getHomePage2();
        setHomePage(_homePage);
    }

    const _openImageCreditsDialog = (content: string) => {
        setOpenImageCreditsDialog(true);
        setImageCreditsContent(content);
    }

    const _closeImageCreditsDialog = () => {
        setOpenImageCreditsDialog(false);
        setOpenImageCreditsDialog(null);
    }

    const columnClassName = `col-${Math.max(6, Math.round(12 / (homePage?.columnBlocks?.length ?? 1)))}`;

    useEffect(() => {
        setup();
    }, []);
    return (<PageContainer
            headerCarousel={homePage.header_carousel}
            fixedHeader={true}
            transparentHeader={true}
            openImageCreditsDialog={_openImageCreditsDialog}>
            <div className={pageStyle['page-container']}>
                <div className={pageStyle['page-columns-container']}>
                    <div className='container'>
                        <div className='row'>
                            {(homePage?.columnBlocks ?? []).map((item, index) => buildColumnBlock(item, columnClassName, index))}
                        </div>
                    </div>
                </div>
            </div>

            <ImageCreditsDialog open={openImageCreditsDialog} content={imageCreditsContent}
                                onClose={_closeImageCreditsDialog}/>
        </PageContainer>
    );
}

export default Index2;
