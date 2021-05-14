import {Block} from "../../data/data";

import columnBlockStyle from './columnBlock.module.scss';

import {ThemeVariant} from "../../interfaces/ThemeVariant";
import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import {SanitizedHtml} from "../sanitizedHtml";
import {getImageUrl} from "../../helpers/imageHelper";
import constants from "../../constants";
import pageSectionStyle from "../page/page-section.module.scss";
import {CustomButton} from "../buttons/buttons";
import * as React from "react";

interface IColumnBlockContent extends Block {
    content: string;
}

interface IColumnBlockProps<IColumnBlockContent> {
    block: IColumnBlockContent;
    columnClass?: string;
    variant?: string;
}

export function ColumnBlock<IColumnBlockContent>({
    block,
    columnClass = 'col',
    variant = 'color1'
}: IColumnBlockProps<T>) {
    return (<div className={`${columnClass} ${columnBlockStyle['column-block-container']}`}>
        <div className={`${columnBlockStyle['column-block-content-container']} ${columnBlockStyle[variant]}`}>
            <div className='row'>
                <div className='col-12'>
                    <div className={columnBlockStyle['block-title']}>
                        {block?.title}
                    </div>
                </div>
            </div>
            <div className='row' style={{marginTop: 20}}>
                {(block.columns ?? []).map((col) => <div className='col-12'>
                    {checkIfNotEmpty(col.content) ?
                        <div className='row'>
                            <div className='col-12'>
                                <SanitizedHtml content={col?.content ?? ''}/>
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
                                            className={pageSectionStyle['page-section-col-image-credits-label']}>
                                            <span>{col?.image?.imageCreditsLabel}</span>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        </div> : null
                    }
                </div>)}
            </div>
        </div>
    </div>);
}
