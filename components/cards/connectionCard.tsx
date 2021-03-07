import * as React from 'react';
import {FormControl, FormControlLabel, IconButton, InputLabel, Switch, Tooltip} from '@material-ui/core';
import {
    CloudDownload as IconDownload,
    Link as IconLink,
} from "@material-ui/icons";
import {useIconButtonStyles} from "../../style/style";
import {ExpandButton} from "../buttons/expandButton";
import {CardContainer} from "./card";
import {getImageUrlByPath} from "../../helpers/imageHelper";

import dataSetCardStyle from './datasetCard.module.scss';
import {forwardRef, PropsWithChildren} from "react";
import modelCardStyle from "./modelCard.module.scss";
import {IDataSetCardProps} from "../../interfaces/IDatasetCardProps";


function _DataSetCard(props: IDataSetCardProps, ref) {

    const {dataSet, selectedForDownload, toggleSelectedForDownload, onClick} = props;

    const [actionsExpanded, setActionsExpanded] = React.useState(false);

    const _openImageLightbox = (url: string) => {
        if (!!props?.openImageLightbox) {
            props.openImageLightbox(url);
        }
    }

    const presynaptic = !!dataSet?.presynaptic ? dataSet?.presynaptic : null;
    const postsynaptyc = !!dataSet?.postsynaptic ? dataSet?.postsynaptic : null;

    const renderNeuron = (neuron: any, headerLabel: string) => {
        const hasImage = !!neuron?.icon;
        const imageUrl = getImageUrlByPath(neuron?.icon) ?? getImageUrlByPath('/assets/images/placeholder.png');
        return (<div className='col-md-6 col-sm-12'>
            <div className='row' style={{height: '100%'}}>
                <div className='col-md-3 col-sm-12'>
                    <img
                        src={imageUrl}
                        onClick={() => hasImage ? _openImageLightbox(imageUrl) : null}
                        className={`${dataSetCardStyle['dataset-card-image']} ${!hasImage ? dataSetCardStyle['not-available'] : ''}`}/>
                </div>
                <div className={`${dataSetCardStyle['dataset-card-main-content']} col-md-7 col-sm-12`}>
                    <div className={`row ${dataSetCardStyle['dataset-card-main-content-inner']}`}>
                        <div className='col-12 text-left'>
                            <span className={dataSetCardStyle['dataset-card-name-label']}>{headerLabel}</span>
                        </div>
                        <div className='col-12 text-left'>
                            <span className={dataSetCardStyle['dataset-card-name-label']}>Name: </span>
                            <span className={dataSetCardStyle['dataset-card-name-value']}>{neuron?.name ?? ''}</span>
                        </div>
                        <div className='col-12 text-left'>
                            <span className={dataSetCardStyle['dataset-card-papers-label']}>Paper(s): </span>
                            {(neuron?.papers ?? []).map((item) => !!item?.url ?
                                <a className={dataSetCardStyle['dataset-card-papers-value']}
                                   target='_blank' href={item.url}>{item.label}</a> :
                                <span className={dataSetCardStyle['dataset-card-papers-value']}>{item.label}</span>)}
                        </div>
                        <div className='col-12 text-left'>
                        <span
                            className={dataSetCardStyle['dataset-card-secondary-region-label']}>Secondary Region: </span>
                        <span
                            className={dataSetCardStyle['dataset-card-secondary-region-value']}>{(neuron?.secondary_region ?? []).join(',')}</span>
                        </div>
                        <div className='col-12 text-left'>
                            <span className={dataSetCardStyle['dataset-card-secondary-region-label']}>Layers: </span><span
                            className={dataSetCardStyle['dataset-card-secondary-region-value']}>{(neuron?.layers ?? []).join(',')}</span>
                        </div>
                        <div className='col-12 text-right'>
                            {neuron?.source ?
                                <span className={dataSetCardStyle['dataset-card-source-label']}>
                                    SOURCE: {neuron?.source}
                                </span> : null
                            }
                        </div>
                    </div>
                </div>
                <div className={`${dataSetCardStyle['dataset-card-actions-container']} col-md-2 col-sm-12`}>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <div className='row'>
                                {/*<div className='col-12'>
                                                <FormControl>
                                                    <FormControlLabel
                                                        control={<Switch
                                                            defaultChecked={selectedForDownload}
                                                            checked={selectedForDownload}
                                                            onChange={(event, value) =>
                                                                toggleSelectedForDownload(dataSet['source_id'], value)}/>}
                                                        label={'Select for download'}/>
                                                </FormControl>
                                            </div>*/}
                                {!!presynaptic?.download_link ?
                                    <div className='col-12 text-center'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Download'>
                                                <ExpandButton
                                                    label={'Download'}
                                                    icon={<IconDownload/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => window.open(presynaptic?.download_link)}
                                                />
                                            </Tooltip>
                                        </span>
                                    </div> : null
                                }
                                {!!neuron?.page_link ?
                                    <div className='col-12 text-center'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='View on Site'>
                                <ExpandButton
                                    label={'View on Site'}
                                    icon={<IconLink/>}
                                    expanded={actionsExpanded}
                                    onClick={() => window.open(neuron?.page_link)}
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
        </div>)
    };

    return (<CardContainer key={`dataset-${dataSet?.id}`}>
        <div className={`${dataSetCardStyle['dataset-card-content']} ${dataSetCardStyle['connection']}`}>
            <div className='row'>
                {!!presynaptic ?
                    renderNeuron(presynaptic, 'Presynaptic') : null
                }
                {!!postsynaptyc ?
                    renderNeuron(postsynaptyc, 'Postsynaptic') : null
                }
            </div>
        </div>
    </CardContainer>);
}

const ConnectionCard = forwardRef((props: IDataSetCardProps, ref) => _DataSetCard(props, ref));

export {
    ConnectionCard
}