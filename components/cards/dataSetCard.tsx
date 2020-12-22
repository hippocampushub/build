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
                <div className={`col-12 ${dataSetCardStyle['dataset-card-description']}`}>
                    {dataSet.description}
                </div>
            </div>
        </div>
    </CardContainer>);
}
