import * as React from 'react';
import {Typography} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";

import pageSectionStyle from './pageSection';

function PageSection({sectionData}){
    return (<section className={pageSectionStyle['page-section']}>
        {checkIfNotEmpty(sectionData?.header) ?
            <Typography variant='h5' gutterBottom className={pageSectionStyle['page-section-header']}>
                {sectionData.header}
            </Typography> : null
        }
        <div className='row'>
            {(sectionData?.columns ?? []).map((item) => <div className='col'>
                {checkIfNotEmpty(item) ?
                    <Typography variant='h6' gutterBottom>
                        {item.header}
                    </Typography> : null
                }
            </div>)}
        </div>
    </section>);
}

export default PageSection;
