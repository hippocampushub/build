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

    return (<CardContainer key={`dataset-${dataSet?.id}`}>
        <div className={dataSetCardStyle['dataset-card-content']}>
            <div className='row'>
                {!!presynaptic ?
                    <div className='col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-md-2 col-sm-12'>
                                <img
                                    src={getImageUrlByPath(presynaptic?.icon) ?? getImageUrlByPath('/assets/images/placeholder.png')}
                                    className={dataSetCardStyle['dataset-card-image']}/>
                            </div>
                            <div className='col-md-7 col-sm-12'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='row'>
                                            <div className='col-12 text-left'>
                                            <span
                                                className={dataSetCardStyle['dataset-card-name-label']}>Name: </span><span
                                                className={dataSetCardStyle['dataset-card-name-value']}>{presynaptic?.name ?? ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                {/* <div className='row'>
                                                <div className='col-12 text-left'>
                                                    <span
                                                        className={dataSetCardStyle['dataset-card-secondary-region-label']}>Secondary Region: </span><span
                                                    className={dataSetCardStyle['dataset-card-secondary-region-value']}>{dataSet?.secondary_region ?? ''}</span>
                                                </div>
                                                <div className='col-12 text-left'>
                                                    <span
                                                        className={dataSetCardStyle['dataset-card-physical-integrity-label']}>Physical Integrity: </span><span
                                                    className={dataSetCardStyle['dataset-card-physical-integrity-value']}>{dataSet?.physical_integrity ?? ''}</span>
                                                </div>
                                            </div>*/}
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
                                </div>
                            </div>
                            <div className={`${dataSetCardStyle['dataset-card-actions-container']} col-md-3 col-sm-12`}>
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
                                            {!!presynaptic?.page_link ?
                                                <div className='col-12 text-center'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='View on Site'>
                                <ExpandButton
                                    label={'View on Site'}
                                    icon={<IconLink/>}
                                    expanded={actionsExpanded}
                                    onClick={() => window.open(presynaptic?.page_link)}
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
                    </div> : null
                }
                {!!postsynaptyc ?
                    <div className='col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-md-2 col-sm-12'>
                                <img
                                    src={getImageUrlByPath(dataSet?.icon) ?? getImageUrlByPath('/assets/images/placeholder.png')}
                                    className={dataSetCardStyle['dataset-card-image']}/>
                            </div>
                            <div className='col-md-7 col-sm-12'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='row'>
                                            <div className='col-12 text-left'>
                                            <span
                                                className={dataSetCardStyle['dataset-card-name-label']}>Name: </span><span
                                                className={dataSetCardStyle['dataset-card-name-value']}>{postsynaptyc?.name ?? ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                {/*<div className='row'>
                                                <div className='col-12 text-left'>
                                                    <span
                                                        className={dataSetCardStyle['dataset-card-secondary-region-label']}>Secondary Region: </span><span
                                                    className={dataSetCardStyle['dataset-card-secondary-region-value']}>{dataSet?.secondary_region ?? ''}</span>
                                                </div>
                                                <div className='col-12 text-left'>
                                                    <span
                                                        className={dataSetCardStyle['dataset-card-physical-integrity-label']}>Physical Integrity: </span><span
                                                    className={dataSetCardStyle['dataset-card-physical-integrity-value']}>{dataSet?.physical_integrity ?? ''}</span>
                                                </div>
                                            </div>*/}
                                            </div>
                                            <div className='col-6 text-right'>
                                                {hasSource ?
                                                    <span className={dataSetCardStyle['dataset-card-source-label']}>
                                                    SOURCE: {postsynaptyc?.source}
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
                                            {!!postsynaptyc?.download_link ?
                                                <div className='col-12 text-center'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='Download'>
                                                <ExpandButton
                                                    label={'Download'}
                                                    icon={<IconDownload/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => window.open(postsynaptyc?.download_link)}
                                                />
                                            </Tooltip>
                                        </span>
                                                </div> : null
                                            }
                                            {!!postsynaptyc?.page_link ?
                                                <div className='col-12 text-center'>
                                        <span className={dataSetCardStyle['dataset-card-action']}>
                                            <Tooltip title='View on Site'>
                                <ExpandButton
                                    label={'View on Site'}
                                    icon={<IconLink/>}
                                    expanded={actionsExpanded}
                                    onClick={() => window.open(postsynaptyc?.page_link)}
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
                    </div> : null
                }
            </div>
        </div>
    </CardContainer>);
}

const ConnectionCard = forwardRef((props: IDataSetCardProps, ref) => _DataSetCard(props, ref));

export {
    ConnectionCard
}