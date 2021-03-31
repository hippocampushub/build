import * as React from 'react';
import {FormControl, FormControlLabel, IconButton, InputLabel, Switch, Tooltip} from '@material-ui/core';
import {
    CloudDownload as IconDownload,
    Link as IconLink,
    Send as IconSend,
} from "@material-ui/icons";
import {useIconButtonStyles} from "../../style/style";
import {ExpandButton} from "../buttons/expandButton";
import {CardContainer} from "./card";
import {getImageUrlByPath} from "../../helpers/imageHelper";

import dataSetCardStyle from './datasetCard.module.scss';
import {forwardRef, PropsWithChildren} from "react";
import {IDataSetCardProps} from "../../interfaces/IDatasetCardProps";
import {downloadFile} from "../../helpers/downloadHelper";


function _DataSetCard(props: IDataSetCardProps, ref) {

    const {dataSet, selectedForDownload, toggleSelectedForDownload, onClick} = props;

    const [actionsExpanded, setActionsExpanded] = React.useState(false);

    const _openMorphologyViewer = () => {
        if (!!props?.openMorphologyViewer) {
            props?.openMorphologyViewer({
                modelName: dataSet?.name,
                modelUrl: dataSet?.download_link
            });
        }
    }

    const _openImageLightbox = (url: string) => {
        if (!!props?.openImageLightbox) {
            props.openImageLightbox(url);
        }
    }

    const _closeImageLightbox = () => {
        if (!!props?.closeImageLightbox) {
            props.closeImageLightbox();
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
                    <img src={imageUrl} onClick={() => hasImage ? _openImageLightbox(imageUrl) : null}
                         className={`${dataSetCardStyle['dataset-card-image']} ${!hasImage ? dataSetCardStyle['not-available'] : ''}`}/>
                </div>
                <div className={`${dataSetCardStyle['dataset-card-main-content']} col-md-7 col-sm-12`}>
                    <div className={`row ${dataSetCardStyle['dataset-card-main-content-inner']}`}>
                        <div className='col-md-6 col-sm-12'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-name-label']}>Name: </span><span
                                    className={dataSetCardStyle['dataset-card-name-value']}>{dataSet?.name ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span
                                        className={dataSetCardStyle['dataset-card-species-label']}>Species: </span><span
                                    className={dataSetCardStyle['dataset-card-species-value']}>{dataSet?.species ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span className={dataSetCardStyle['dataset-card-region-label']}>Region: </span><span
                                    className={dataSetCardStyle['dataset-card-region-value']}>{dataSet?.region ?? ''}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className='col-12 text-left'>
                                    <span
                                        className={dataSetCardStyle['dataset-card-cell-type-label']}>Cell Type: </span><span
                                            className={dataSetCardStyle['dataset-card-cell-type-value']}>{dataSet?.cell_type ?? ''}</span>
                                        </div>
                                        <div className='col-12 text-left'>
                                            <span className={dataSetCardStyle['dataset-card-secondary-region-label']}>Secondary Region: </span><span
                                            className={dataSetCardStyle['dataset-card-secondary-region-value']}>{dataSet?.secondary_region ?? ''}</span>
                                        </div>
                                        <div className='col-12 text-left'>
                                            <span className={dataSetCardStyle['dataset-card-physical-integrity-label']}>Physical Integrity: </span><span
                                            className={dataSetCardStyle['dataset-card-physical-integrity-value']}>{dataSet?.physical_integrity ?? ''}</span>
                                        </div>
                                    </div>
                                </div>
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
                                <div className='col-12 text-center'>
                                    <FormControl>
                                        <FormControlLabel
                                            control={<Switch
                                                defaultChecked={selectedForDownload}
                                                checked={selectedForDownload}
                                                onChange={(event, value) =>
                                                    toggleSelectedForDownload(dataSet['source_id'], value)}/>}
                                            label={'Select for download'}/>
                                    </FormControl>
                                </div>
                                <div className='col-12 text-center'>
                                    {hasDownloadLink ?
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Download'>
                                                <ExpandButton
                                                    label={'Download'}
                                                    icon={<IconDownload/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => !!props?.askForDownload ? props?.askForDownload({
                                                        url: downloadLink
                                                    }) : downloadFile(downloadLink) }
                                                />
                                            </Tooltip>
                                        </span> : null
                                    }
                                    {hasPageLink ?
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='View on Site'>
                                                <ExpandButton
                                                    label={'View on Site'}
                                                    icon={<IconLink/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => window.open(pageLink)}
                                                />
                                            </Tooltip>
                                        </span> : null
                                    }
                                    {hasDownloadLink ?
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Send to HH Neuron Builder'>
                                                <ExpandButton
                                                    label={'Send to model building'}
                                                    icon={<IconSend/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => _selectForModelBuilder()}
                                                />
                                            </Tooltip>
                                        </span> : null
                                    }
                                    {hasDownloadLink ?
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Open Morphology Viewer'>
                                                <ExpandButton
                                                    label={'Open Morphology Viewer'}
                                                    icon={<img src={getImageUrlByPath('/assets/icons/3d.svg')}/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => _openMorphologyViewer()}
                                                />
                                            </Tooltip>
                                        </span> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardContainer>);
}

const MorphologyCard = forwardRef((props: IDataSetCardProps, ref) => _DataSetCard(props, ref));

export {
    MorphologyCard
}