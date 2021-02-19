import * as React from 'react';
import {Checkbox, FormControl, FormControlLabel, IconButton, Switch, Tooltip} from '@material-ui/core';
import {
    CloudDownload as IconDownload,
    Close as IconClose,
    Add as IconAdd,
    Link as IconLink, CheckBox,
} from "@material-ui/icons";
import {useIconButtonStyles} from "../../style/style";
import {ExpandButton} from "../buttons/expandButton";
import {CardContainer} from "./card";

import modelCardStyle from './modelCard.module.scss';
import {forwardRef, PropsWithChildren} from "react";

export interface IModelCardProps extends PropsWithChildren<any> {
    model: any;
    selectedForDownload: boolean;
    toggleModFileForBuilding: (item: any, checked: boolean) => void;
    isModFileSelected: (item: any) => boolean;
    onClick: () => void;
}

function _ModelCard(props: IModelCardProps, ref) {

    const iconButtonStyles = useIconButtonStyles();

    const {model, selectedForDownload, toggleSelectedForDownload, onClick} = props;

    const [actionsExpanded, setActionsExpanded] = React.useState(false);
    const [isModFilesExpanded, setIsModFilesExpanded] = React.useState(false);

    const downloadLink = model?.download_link ?? null;
    const hasDownloadLink = !!downloadLink;

    const pageLink = model?.page_link ?? null;
    const hasPageLink = !!pageLink;

    const hasSource = !!model?.source && model?.source?.trim().length > 0;
    const hasReadme = !!model?.readme_link && model?.readme_link?.trim().length > 0;
    const hasModFiles = !!model?.model_files && model?.model_files?.length > 0;

    const _isModFileSelected = (item: any) => {
        if (!!props?.isModFileSelected) {
            return props?.isModFileSelected(item);
        }
    }

    const _onToggleModFile = (item: any, checked: boolean) => {
        if (!!props?.toggleModFileForBuilding) {
            return props?.toggleModFileForBuilding(item, checked);
        }
    }

    // @ts-ignore
    return (<CardContainer key={`model-${model?.id}`}>
        <div className={modelCardStyle['model-card-content']}>
            <div className='row'>
                {/*<div className='col-md-2 col-sm-12'>
                    <img src={getImageUrlByPath(model?.icon) ?? getImageUrlByPath('/assets/images/placeholder.png')}
                         className={modelCardStyle['model-card-image']}/>
                </div>*/}
                <div className='col-md-9 col-sm-12'>
                    <div className='row'>
                        <div className='col-md-8 col-sm-12'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <span className={modelCardStyle['model-card-name-label']}>Name: </span><span
                                    className={modelCardStyle['model-card-name-value']}>{model?.name ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span className={modelCardStyle['model-card-types-label']}>Type(s): </span><span
                                    className={modelCardStyle['model-card-types-value']}>{(model?.model_types ?? []).join(',') ?? ''}</span>
                                </div>
                                <div className='col-12 text-left'>
                                    <span className={modelCardStyle['model-card-papers-label']}>Paper(s): </span>
                                    {(model?.papers ?? []).map((item) => !!item?.url ?
                                        <a className={modelCardStyle['model-card-papers-value']}
                                           href={item.url}>{item.label}</a> :
                                        <span
                                            className={modelCardStyle['model-card-papers-value']}>{item.label}</span>)}
                                </div>
                                {hasReadme ?
                                    <div className='col-12 text-left'>
                                        <span className={modelCardStyle['model-card-papers-label']}>Readme: </span>
                                        <a href={model?.readme_link} target='_blank'><span
                                            className={modelCardStyle['model-card-papers-value']}>{model?.readme_link ?? ''}</span></a>
                                    </div> : null
                                }
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 text-right'>
                            <div className='row'>
                                <div className='col-12'>
                                    {hasSource ?
                                        <span className={modelCardStyle['model-card-source-label']}>
                                            SOURCE: {model?.source}
                                        </span> : null
                                    }
                                    {hasModFiles ?
                                        <div>
                                            <span className={modelCardStyle['model-card-source-label']}>
                                                Mod Files: {model?.model_files?.length}
                                            </span>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {hasModFiles ?
                        <div className='row'>
                            <div className='col-md-12 col-sm-12'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <div>
                                            <span className={modelCardStyle['model-card-expand-all-label']}>Expand All</span>
                                            <IconButton
                                                className={iconButtonStyles.root}
                                                onClick={() => setIsModFilesExpanded(!isModFilesExpanded)}>
                                                {isModFilesExpanded ?
                                                    <IconClose/> : <IconAdd/>
                                                }
                                            </IconButton>
                                        </div>
                                    </div>
                                    {isModFilesExpanded ?
                                        <div className='col-12 text-left'>
                                            <span
                                                className={modelCardStyle['model-card-papers-label']}>Mod File(s): </span>
                                            <div className='row'>
                                                {(model?.model_files ?? []).map((item) =>
                                                    <div className='col-4'>
                                                        <FormControlLabel
                                                            control={<Checkbox
                                                                key={item.url}
                                                                checked={_isModFileSelected(item)}
                                                                onChange={(event, checked) =>
                                                                    _onToggleModFile(item, checked)}/>}
                                                            label={''}/>
                                                        <a href={item.url}>{item.label}</a>
                                                    </div>
                                                )}
                                            </div>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        </div> : null
                    }
                </div>
                <div className={`${modelCardStyle['model-card-actions-container']} col-md-3 col-sm-12`}>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <div className='row'>
                                {hasDownloadLink ?
                                    <div className='col-12'>
                                        <FormControl>
                                            <FormControlLabel
                                                control={<Switch
                                                    defaultChecked={selectedForDownload}
                                                    checked={selectedForDownload}
                                                    onChange={(event, value) =>
                                                        toggleSelectedForDownload(model['source_id'], value)}/>}
                                                label={'Select for download'}/>
                                        </FormControl>
                                    </div> : null
                                }
                                <div className='col-12 text-center'>
                                    {hasDownloadLink ?
                                        <span className={modelCardStyle['model-card-action']}>
                                            <Tooltip title='Download'>
                                                <ExpandButton
                                                    label={'Download'}
                                                    icon={<IconDownload/>}
                                                    expanded={actionsExpanded}
                                                    onClick={() => window.open(downloadLink)}
                                                />
                                            </Tooltip>
                                        </span> : null
                                    }
                                    {hasPageLink ?
                                        <span className={modelCardStyle['model-card-action']}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardContainer>);
}

const ModelCard = forwardRef((props: IModelCardProps, ref) => _ModelCard(props, ref));

export {
    ModelCard
}