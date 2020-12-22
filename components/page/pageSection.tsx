import * as React from 'react';
import {Typography} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import {BlockContainer} from "../blocks/block";
import {Block} from "../../data/data";

import pageSectionStyle from './page-section.module.scss';
import {ThemeVariant} from "../../interfaces/ThemeVariant";


function PageSection({sectionData, variant = 'light'}: {sectionData: any, variant: ThemeVariant}) {

    const _buildBlock = (block: Block, variant: ThemeVariant) => (<BlockContainer block={block} variant={variant}/>);


    return (<section className={`${pageSectionStyle['page-section']} ${pageSectionStyle[variant]}`}>
            {checkIfNotEmpty(sectionData?.header) ?
                <Typography variant='h5' align='center' gutterBottom
                            className={pageSectionStyle['page-section-header']}>
                    {sectionData.header}
                </Typography> : null
            }
            {(sectionData?.rows ?? []).map((row) => {
                const hasColumns = (row.columns ?? []).length > 0;
                const colClassName = hasColumns ? `col-${Math.ceil(12 / (row.columns ?? []).length)}` : 'col-12';
                return (<div>
                    <div className='row'>
                        <div className='col-12'>
                            {checkIfNotEmpty(row.header) ?
                                <Typography variant='h6' gutterBottom className={pageSectionStyle['page-section-sub-header']}>
                                    {row.header}
                                </Typography> : null
                            }
                        </div>
                    </div>
                    <div className='row'>
                        {(row.columns ?? []).map((col) => <div className={colClassName}>
                            {(col.blocks ?? []).map((block) => _buildBlock(block, variant))}
                        </div>)}
                    </div>
                </div>);
            })}
    </section>);
}

export default PageSection;
