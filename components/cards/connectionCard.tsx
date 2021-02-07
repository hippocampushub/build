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

export interface IDataSetCardProps extends PropsWithChildren<any> {
    dataSet: any;
    selectedForDownload: boolean;
    toggleSelectedForDownload: (id: string, value: boolean) => void;
    onClick: () => void;
}

function _DataSetCard(props: IDataSetCardProps, ref) {

    const {dataSet, selectedForDownload, toggleSelectedForDownload, onClick} = props;

    const [actionsExpanded, setActionsExpanded] = React.useState(false);

    const _onClick = () => {
        if (!!onClick) {
            onClick();
        }
    }

    const iconButtonClasses = useIconButtonStyles();

    const hasSource = !!dataSet?.source && dataSet?.source?.trim().length > 0;

    const presynaptic = !!dataSet?.presynaptic ? dataSet?.presynaptic?.source : null;
    const postsynaptyc = !!dataSet?.postsynaptic ? dataSet?.postsynaptic?.source : null;

    const renderNeuron = (neuron: any, headerLabel: string) => (<div className='col-md-6 col-sm-12'>
        <div className='row' style={{height: '100%'}}>
            <div className='col-md-3 col-sm-12'>
                <img
                    src={getImageUrlByPath(neuron?.icon) ?? getImageUrlByPath('/assets/images/placeholder.png')}
                    onError={this.src = getImageUrlByPath('/assets/images/placeholder.png')}
                    className={dataSetCardStyle['dataset-card-image']}/>
            </div>
            <div className='col-md-7 col-sm-12'>
                <div className='row'>

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
                               href={item.url}>{item.label}</a> :
                            <span className={dataSetCardStyle['dataset-card-papers-value']}>{item.label}</span>)}
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
    </div>);

    return (<CardContainer key={`dataset-${dataSet?.id}`}>
        <div className={dataSetCardStyle['dataset-card-content']}>
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