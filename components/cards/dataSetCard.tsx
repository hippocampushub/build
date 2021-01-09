import {CardContainer} from "./card";

import dataSetCardStyle from './datasetcard.module.scss';

export function DataSetCard({dataSet, onClick}) {

    const _onClick = () => {
        if (!!onClick) {
            onClick();
        }
    }

    return (<CardContainer title={dataSet.title} onClick={_onClick}>
        <div className={dataSetCardStyle['dataset-card-content']}>
            <div className='row'>
                <div className='col-2'>
                    <img src={dataSet?.icon ?? '/assets/images/placeholder.png'} className={dataSetCardStyle['dataset-card-image']}/>
                </div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12'>
                            {dataSet?.name ?? ''} - {dataSet?.species} - {dataSet?.secondary_region} - {dataSet?.cell_type}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardContainer>);
}
