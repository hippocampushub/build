import * as React from 'react';
import {Typography} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import {BlockContainer} from "../blocks/block";
import {Block} from "../../data/data";

import pageSectionStyle from './page-section.module.scss';

function PageSection({sectionData, backgroundColor = '#fff'}) {

    const _buildBlock = (block: Block) => (<BlockContainer block={block}/>);

    return (<section className={pageSectionStyle['page-section']} style={{backgroundColor: backgroundColor}}>
            {checkIfNotEmpty(sectionData?.header) ?
                <Typography variant='h5' align='center' gutterBottom
                            className={pageSectionStyle['page-section-header']}>
                    {sectionData.header}
                </Typography> : null
            }
            {(sectionData?.rows ?? []).map((row) => (<div>
                <div className='row'>
                    <div className='col-12'>
                        {checkIfNotEmpty(row.header) ?
                            <Typography variant='h6' align='center' gutterBottom>
                                {row.header}
                            </Typography> : null
                        }
                    </div>
                </div>
                <div className='row'>
                    {(row.columns ?? []).map((col) => <div className='col'>
                        {(col.blocks ?? []).map((block) => _buildBlock(block))}
                    </div>)}
                </div>
            </div>))}
        </section>
    );
}

export default PageSection;
