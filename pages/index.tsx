import * as React from 'react'
import PageContainer from '../components/page/pageContainer';
import {getConfig, getHomePage, getMenuItems} from "../helpers/dataHelper";
import {ImageCreditsDialog} from "../components/dialogs/imageCreditsDialog";
import {ColumnBlock} from "../components/blocks/columnBlock";
import * as pageStyle from './home-page.module.scss';

const {useEffect, useState} = React;


const Index = () => {
    const [homePage, setHomePage] = React.useState<any>({});
    const [openImageCreditsDialog, setOpenImageCreditsDialog] = React.useState(false);
    const [imageCreditsContent, setImageCreditsContent] = React.useState<any>('');

    const buildColumnBlock = (block, columnClassName, index, openImageCreditsDialog) => <ColumnBlock
        block={block} columnClass={columnClassName} variant={`color-${index + 1}`} index={index} openImageCreditsDialog={openImageCreditsDialog}/>

    const setup = async () => {
        const _homePage = await getHomePage();
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

    const columnClassName = `col-md-${Math.max(6, Math.round(12 / (homePage?.columnBlocks?.length ?? 1)))} col-sm-12`;

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
                            {(homePage?.columnBlocks ?? [])
                                .map((item, index) => buildColumnBlock(item, columnClassName, index, _openImageCreditsDialog))}
                        </div>
                    </div>
                </div>
            </div>
            <ImageCreditsDialog open={openImageCreditsDialog} content={imageCreditsContent}
                                onClose={_closeImageCreditsDialog}/>
        </PageContainer>
    );
}

export default Index;
