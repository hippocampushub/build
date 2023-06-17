import * as React from "react";

import {Block} from "../../data/data";

import columnBlockStyle from './columnBlock.module.scss';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import {SanitizedHtml} from "../sanitizedHtml";
import {getImageUrl} from "../../helpers/imageHelper";
import constants from "../../constants";
import pageSectionStyle from "../page/page-section.module.scss";
import {CustomButton} from "../buttons/buttons";
import {useRouter} from "next/router";
import {getPageUrl} from "../../helpers/navigationHelper";

interface IColumnBlockProps {
    block: any;
    index: number;
    columnClass?: string;
    variant?: string;
    openImageCreditsDialog: (content: string) => void;
}

export function ColumnBlock({
    block,
    index,
    columnClass = 'col',
    variant = 'color1',
    openImageCreditsDialog
}: IColumnBlockProps) {
    const padIndex = index + 1;
    const router = useRouter();
    const _goToUrl = async (url) => {
        if (!!url && url?.trim()?.length > 0) {
            if (url?.startsWith('http')) {
                window.open(url);
            } else {
                await router.push(url);
            }
        }
    }
    return (<div className={`${columnClass} ${columnBlockStyle['column-block-container']}`}>
        <div className={`${columnBlockStyle['column-block-content-container']} ${columnBlockStyle[variant]}`}>
            <div className='row'>
                <div className='col-12'>
                    {padIndex}
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className={columnBlockStyle['column-block-title']}>
                        {!!block?.titleUrl ?
                            <a href={getPageUrl(block?.titleUrl)}>{block?.title}</a> : block.title
                        }
                    </div>
                </div>
            </div>
            {(block.columns ?? [])?.map((col) => {
                const _hasImage = !!col?.image;
                const _hasActions = !!col?.actions && (col?.actions ?? []).length > 0
                const columnClassName = _hasImage ? 'col-md-6' : 'col-sm-12';
                return (<div style={{display: 'flex', height: '100%', flexFlow: 'column'}}>
                    <div className='row' style={{marginTop: 20}}>
                        <div className={columnClassName}>
                            {checkIfNotEmpty(col?.content) ?
                                <div className='row'>
                                    <div className='col-12'>
                                        <SanitizedHtml content={col?.content ?? ''}
                                                       className={columnBlockStyle['column-block-content']}/>
                                    </div>
                                </div> : null
                            }
                        </div>
                        <div className={`${columnClassName} text-center`}>
                            <div className={columnBlockStyle['column-block-image-container']}>
                                <img src={getImageUrl(col?.image)} className={columnBlockStyle['column-block-image']}/>
                                {!!col?.image?.imageCreditsLabel ?
                                    <div
                                        className={columnBlockStyle['column-block-image-credits-label']} onClick={() => openImageCreditsDialog(col?.image?.imageCreditsContent)}>
                                        <span>{col?.image?.imageCreditsLabel}</span>
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                    {_hasActions ?
                        <div className={`row ${columnBlockStyle['column-block-actions-row']}`} style={{marginTop: 10, flex: '1 1 auto', alignItems: 'center'}}>
                            {col?.actions?.map((item, index) => <div className={(index + 1) % 2 != 0 && col?.actions?.length == index  + 1 ? 'col-12': 'col-lg-6 col-md-6 col-sm-12'} style={{marginTop: 10}}>
                                <CustomButton
                                    isCta={true}
                                    onClick={() => _goToUrl(item?.url)}
                                    style={{margin: '0 auto', fontSize: 14}}>
                                    {item?.label ?? ''}
                                </CustomButton>
                            </div>)}
                        </div> : null
                    }
                </div>)
            })}
        </div>
    </div>);
}
