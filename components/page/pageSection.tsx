import * as React from 'react';
import {useRouter} from "next/router";
import {Button, Typography} from '@material-ui/core';

import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import {ThemeVariant} from "../../interfaces/ThemeVariant";
import {CustomButton} from '../buttons/buttons';
import pageSectionStyle from './page-section.module.scss';
import {getImageUrl, getImageUrlByPath} from "../../helpers/imageHelper";
import {SanitizedHtml} from "../sanitizedHtml";
import constants from "../../constants";


function PageSection({
                         sectionData,
                         variant = 'light',
                         asContainer = false,
                         openImageCreditsDialog
                     }: { sectionData: any, variant: ThemeVariant, asContainer?: boolean, openImageCreditsDialog?: (content: string) => void}) {

    const router = useRouter();

    const _goToUrl = async (url) => {
        if (!!url) {
            if (url.startsWith('http')) {
                window.open(url);
            } else {
                await router.push(url);
            }
        }
    }

    const mainContentTextStyle: any = {
        fontSize: sectionData?.fontSize ?? constants.SECTIONS.mainContentTextStyle.fontSize,
        textAlign: sectionData?.textAlign ?? constants.SECTIONS.mainContentTextStyle.textAlign
    };

    return (<section id={sectionData.id} className={`${pageSectionStyle['page-section']} ${pageSectionStyle[variant]}`}>
        <div className={pageSectionStyle['page-section-main-container']}>
            {checkIfNotEmpty(sectionData?.header) ?
                <div className={pageSectionStyle['page-section-header']}>
                    <Typography variant='h5' align='center' gutterBottom
                                className={pageSectionStyle['page-section-header-label']}>
                        {sectionData.header}
                    </Typography>
                    <div className={pageSectionStyle['page-section-header-divider']}/>
                </div> : null
            }
            {checkIfNotEmpty(sectionData?.content) ?
                <div className='row' style={{marginTop: 10}}>
                    <div className='col-12'>
                        <SanitizedHtml content={sectionData.content ?? ''} style={mainContentTextStyle}/>
                    </div>
                </div> : null
            }
            {(sectionData?.rows ?? []).map((row) => {
                const rowContentTextStyle: any = {
                    fontSize: row?.fontSize ?? constants.SECTIONS.rowContentTextStyle.fontSize,
                    textAlign: row?.textAlign ?? constants.SECTIONS.mainContentTextStyle.textAlign
                };
                const hasColumns = (row.columns ?? []).length > 0;
                const colClassName = hasColumns ? `col-${Math.ceil(12 / (row.columns ?? []).length)}` : 'col-12';
                return (<div className={asContainer ? 'container' : null} id={row?.id ?? ''}>
                    <div className='row' style={{marginTop: 20}}>
                        <div className='col-12'>
                            {checkIfNotEmpty(row.header) ?
                                <Typography variant='h6' gutterBottom
                                            className={pageSectionStyle['page-section-sub-header']}>
                                    {row.header}
                                </Typography> : null
                            }
                        </div>
                    </div>
                    <div className='row' style={{marginTop: 20}}>
                        {(row.columns ?? []).map((col) => <div className={colClassName}>
                            {checkIfNotEmpty(col.content) ?
                                <div className='row'>
                                    <div className='col-12'>
                                        <SanitizedHtml content={col?.content ?? ''} style={rowContentTextStyle}/>
                                    </div>
                                </div> : null
                            }
                            {!!col?.image ?
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <div style={{position: 'relative', display: 'inline-block'}}>
                                            <img src={getImageUrl(col?.image)} style={{
                                                maxWidth: col?.image?.maxWidth ?? constants.SECTIONS.rowContentImageStyle?.maxWidth,
                                                width: '100%'
                                            }}/>
                                            {!!col?.image?.imageCreditsLabel ?
                                                <div
                                                    className={pageSectionStyle['page-section-col-image-credits-label']} onClick={() => openImageCreditsDialog(col?.image?.imageCreditsContent)}>
                                                    <span>{col?.image?.imageCreditsLabel}</span>
                                                </div> : null
                                            }
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>)}
                        {!!row.cta ?
                            <div className='col-12 text-center' style={{marginTop: 40}}>
                                <CustomButton onClick={() => _goToUrl(row?.cta?.url)} variant='primary'
                                              style={{margin: '0 auto', fontSize: 16}}
                                              isCta={true}>
                                    {row.cta.label}
                                </CustomButton>
                            </div> : null
                        }
                    </div>
                </div>);
            })}
        </div>
    </section>);
}

export default PageSection;
