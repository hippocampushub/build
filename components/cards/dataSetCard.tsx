import * as React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {
    CloudDownload as IconDownload,
    Link as IconLink,
    ChevronLeft as ArrowLeft,
    ChevronRight as ArrowRight
} from "@material-ui/icons";
import {useIconButtonStyles} from "../../style/style";
import {ExpandButton} from "../buttons/expandButton";
import {CardContainer} from "./card";
import {getImageUrlByPath} from "../../helpers/imageHelper";

import dataSetCardStyle from './datasetcard.module.scss';

export function DataSetCard({dataSet, onClick}) {

    const [actionsExpanded, setActionsExpanded] = React.useState(false);

    const _onClick = () => {
        if (!!onClick) {
            onClick();
        }
    }

    const iconButtonClasses = useIconButtonStyles();

    const contentClassName = actionsExpanded ? 'col-md-7 col-sm-12' : 'col-md-9 col-sm-12';
    const actionsClassName = actionsExpanded ? `${dataSetCardStyle['dataset-card-actions-container']} col-md-3 col-sm-12` : `${dataSetCardStyle['dataset-card-actions-container']} col-md-1 col-sm-12`;

    const downloadLink = dataSet?.download_original_format ?? null;
    const hasDownloadLink = !!downloadLink;

    const pageLink = dataSet?.page_link ?? null;
    const hasPageLink = !!pageLink;

    const hasSource = !!dataSet?.source && dataSet?.source?.trim().length > 0;

    return (<CardContainer key={`dataset-${dataSet?.id}`}>
        <div className={dataSetCardStyle['dataset-card-content']}>
            <div className='row'>
                <div className='col-md-2 col-sm-12'>
                    <img src={dataSet?.icon ?? getImageUrlByPath('/assets/images/placeholder.png')}
                         className={dataSetCardStyle['dataset-card-image']}/>
                </div>
                <div className={contentClassName}>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='col-12 text-left'>
                                <span className={dataSetCardStyle['dataset-card-name-label']}>Name: </span><span
                                className={dataSetCardStyle['dataset-card-name-value']}>{dataSet?.name ?? ''}</span>
                            </div>
                            <div className='col-12 text-left'>
                                <span className={dataSetCardStyle['dataset-card-species-label']}>Species: </span><span
                                className={dataSetCardStyle['dataset-card-species-value']}>{dataSet?.species ?? ''}</span>
                            </div>
                            <div className='col-12 text-left'>
                                <span className={dataSetCardStyle['dataset-card-region-label']}>Region: </span><span
                                className={dataSetCardStyle['dataset-card-region-value']}>{dataSet?.region ?? ''}</span>
                            </div>
                            <div className='col-12 text-left'>
                                <span className={dataSetCardStyle['dataset-card-cell-type-label']}>Cell Type: </span><span
                                className={dataSetCardStyle['dataset-card-cell-type-value']}>{dataSet?.cell_type ?? ''}</span>
                            </div>
                        </div>
                        <div className='col-6 text-right'>
                            {hasSource ?
                                <span className={dataSetCardStyle['dataset-card-source-label']}>
                                    SOURCE: {dataSet?.source}
                                </span> : null
                            }
                        </div>
                    </div>
                </div>
                <div className={actionsClassName}>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <div className='row'>
                                {hasDownloadLink ?
                                    <div className='col-12'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Download'>
                                    <ExpandButton
                                        label={'Download'}
                                        icon={<IconDownload/>}
                                        expanded={actionsExpanded}
                                        onClick={() => window.open(downloadLink)}
                                    />
                                </Tooltip>
                                        </span>
                                    </div> : null
                                }
                                {hasPageLink ?
                                    <div className='col-12'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>

                                    <Tooltip title='View on Site'>
                                <ExpandButton
                                    label={'View on Site'}
                                    icon={<IconLink/>}
                                    expanded={actionsExpanded}
                                    onClick={() => window.open(pageLink)}
                                />
                                </Tooltip>
                            </span>
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardContainer>);
}