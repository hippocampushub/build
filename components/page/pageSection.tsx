import * as React from 'react';
import {useRouter} from "next/router";
import {Button, Typography} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";

import {ThemeVariant} from "../../interfaces/ThemeVariant";
import {CustomButton} from '../buttons/buttons';
import pageSectionStyle from './page-section.module.scss';


function PageSection({sectionData, variant = 'light'}: { sectionData: any, variant: ThemeVariant }) {

    const router = useRouter();

    return (<section id={sectionData.id} className={`${pageSectionStyle['page-section']} ${pageSectionStyle[variant]}`}>
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
                            <Typography variant='h6' gutterBottom
                                        className={pageSectionStyle['page-section-sub-header']}>
                                {row.header}
                            </Typography> : null
                        }
                    </div>
                </div>
                <div className='row'>
                    {(row.columns ?? []).map((col) => <div className={colClassName}>
                        {checkIfNotEmpty(col.content) ?
                            <div className='row'>
                                <div className='col-12'>
                                    {col.content}
                                </div>
                            </div> : null
                        }
                        {checkIfNotEmpty(col.image) ?
                            <div className='row'>
                                <div className='col-12 text-center'>
                                    <img src={col.image} style={{maxWidth: '200px'}}/>
                                </div>
                            </div> : null
                        }
                    </div>)}
                    {!!row.cta ?
                        <div className='col-12 text-center'>
                            <CustomButton onClick={() => router.push(row.cta.url)} variant='primary'>
                                {row.cta.label}
                            </CustomButton>
                        </div> : null
                    }
                </div>
            </div>);
        })}
            </section>);
        }

export default PageSection;
