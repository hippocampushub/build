import * as React from 'react';
import {FormControl, FormControlLabel, IconButton, InputLabel, Switch, Tooltip} from '@material-ui/core';
import {
    CloudDownload as IconDownload,
    Link as IconLink,
    Send as IconSend
} from "@material-ui/icons";
import {CardContainer} from "./card";
import {getImageUrlByPath} from "../../helpers/imageHelper";
import ExpandButton from "../buttons/expandButton";

import dataSetCardStyle from './datasetCard.module.scss';
import {forwardRef, PropsWithChildren} from "react";
import {IDataSetCardProps} from "../../interfaces/IDatasetCardProps";

function _DataSetCard(props: IDataSetCardProps, ref) {

    const {dataSet, selectedForDownload, toggleSelectedForDownload, onClick} = props;

    const [actionsExpanded, setActionsExpanded] = React.useState(false);

    const _onClick = () => {
        if (!!onClick) {
            onClick();
        }
    }

    const _openImageLightbox = (url: string) => {
        if (!!props?.openImageLightbox) {
            props.openImageLightbox(url);
        }
    }

    const _selectForModelBuilder = () => {
        if (!!props?.selectForModelBuilder) {
            props?.selectForModelBuilder(dataSet);
        }
    }

    const downloadLink = dataSet?.download_link ?? null;
    const hasDownloadLink = !!downloadLink;

    const pageLink = dataSet?.page_link ?? null;
    const hasPageLink = !!pageLink;

    const hasSource = !!dataSet?.source && dataSet?.source?.trim().length > 0;

    const hasImage = !!dataSet?.icon;

    const imageUrl = getImageUrlByPath(dataSet?.icon) ?? getImageUrlByPath('/assets/images/placeholder.png');

    return (<CardContainer key={`dataset-${dataSet?.id}`}>
        <div className={dataSetCardStyle['dataset-card-content']}>
            <div className='row'>
                <div className='col-md-2 col-sm-12'>
                    <img src={imageUrl}
                         onClick={() => hasImage ? _openImageLightbox(imageUrl) : null}
                         className={`${dataSetCardStyle['dataset-card-image']} ${!hasImage ? dataSetCardStyle['not-available'] : ''}`}/>
                </div>
                <div className={`${dataSetCardStyle['dataset-card-main-content']} col-md-7 col-sm-12`}>
                    <div className={`row ${dataSetCardStyle['dataset-card-main-content-inner']}`}>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-name-label']}>Name: </span><span
                                    className={dataSetCardStyle['dataset-card-name-value']}>{dataSet?.name ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-papers-label']}>Paper(s): </span>
                                    {(dataSet?.papers ?? []).map((item) => !!item?.url ?
                                        <a className={dataSetCardStyle['dataset-card-papers-value']}
                                           target='_blank'
                                           href={item.url}>{item.label}
                                        </a> : <span
                                            className={dataSetCardStyle['dataset-card-papers-value']}>{item.label}</span>)}
                                </div>
                                {/*<div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-species-label']}>Species: </span><span
                                    className={dataSetCardStyle['dataset-card-species-value']}>{dataSet?.species ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-region-label']}>Region: </span><span
                                    className={dataSetCardStyle['dataset-card-region-value']}>{dataSet?.region ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span
                                        className={dataSetCardStyle['dataset-card-cell-type-label']}>Cell Type: </span><span
                                    className={dataSetCardStyle['dataset-card-cell-type-value']}>{dataSet?.cell_type ?? ''}</span>
                                </div>*/}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-secondary-region-label']}>Secondary Region: </span><span
                                    className={dataSetCardStyle['dataset-card-secondary-region-value']}>{(dataSet?.secondary_region ?? []).join(',')}</span>
                                </div>

                            </div>
                            {!!dataSet?.layers && dataSet?.layers?.length > 0 ?
                                <div className='row'>
                                    <div className='col-12 text-left'>
                                    <span
                                        className={dataSetCardStyle['dataset-card-secondary-region-label']}>Layers: </span><span
                                        className={dataSetCardStyle['dataset-card-secondary-region-value']}>{(dataSet?.layers ?? []).join(',')}</span>
                                    </div>
                                </div> : null
                            }
                            {!!dataSet?.etype ?
                                <div className='row'>
                                    <div className='col-12 text-left'>
                                    <span
                                        className={dataSetCardStyle['dataset-card-cell-type-label']}>E-Type: </span><span
                                        className={dataSetCardStyle['dataset-card-cell-type-value']}>{dataSet?.etype ?? ''}</span>
                                    </div>
                                </div> : null
                            }
                            <div className='row'>
                                <div className='col-12 text-right'>
                                    {hasSource ?
                                        <span className={dataSetCardStyle['dataset-card-source-label']}>
                                    SOURCE: {dataSet?.source}
                                </span> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${dataSetCardStyle['dataset-card-actions-container']} col-md-3 col-sm-12`}>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <div className='row'>
                                {/*{hasDownloadLink ?
                                    <div className='col-12'>
                                        <FormControl>
                                            <FormControlLabel
                                                control={<Switch
                                                    defaultChecked={selectedForDownload}
                                                    checked={selectedForDownload}
                                                    onChange={(event, value) =>
                                                        toggleSelectedForDownload(dataSet['source_id'], value)}/>}
                                                label={'Select for download'}/>
                                        </FormControl>
                                    </div> : null
                                }*/}
                                {hasDownloadLink ?
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12 text-center'>
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
                                            </div>
                                            <div className='col-12 text-center'>

                                                <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Add to HH Neuron Builder Cart'>
                                                <ExpandButton
                                                    label={'Add to HH Neuron Builder Cart'}
                                                    icon={<IconSend/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => _selectForModelBuilder()}
                                                />
                                            </Tooltip>
                                                </span>
                                            </div>
                                        </div>
                                    </div> : null
                                }
                                {hasPageLink ?
                                    <div className='col-12 text-center'>
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

const ElectrophysiologyCard = forwardRef((props: IDataSetCardProps, ref) => _DataSetCard(props, ref));

export {
    ElectrophysiologyCard
}