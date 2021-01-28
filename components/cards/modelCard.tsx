import * as React from 'react';
import {Tooltip} from '@material-ui/core';
import {
    CloudDownload as IconDownload,
    Link as IconLink,
} from "@material-ui/icons";
import {useIconButtonStyles} from "../../style/style";
import {ExpandButton} from "../buttons/expandButton";
import {CardContainer} from "./card";

import modelCardStyle from './modelCard.module.scss';
import {forwardRef, PropsWithChildren} from "react";

export interface IModelCardProps extends PropsWithChildren<any> {
    model: any;
    selectedForDownload: boolean;
    toggleSelectedForDownload: (id:string, value: boolean) => void;
    onClick: () => void;
}

function _ModelCard(props: IModelCardProps, ref) {

    const {model, selectedForDownload, toggleSelectedForDownload, onClick} = props;

    const [actionsExpanded, setActionsExpanded] = React.useState(false);

    const _onClick = () => {
        if (!!onClick) {
            onClick();
        }
    }

    const iconButtonClasses = useIconButtonStyles();


    const downloadLink = model?.download_link ?? null;
    const hasDownloadLink = !!downloadLink;

    const pageLink = model?.page_link ?? null;
    const hasPageLink = !!pageLink;

    const hasSource = !!model?.source && model?.source?.trim().length > 0;
    const hasReadme = !!model?.readme_link && model?.readme_link?.trim().length > 0;
    const hasModelFiles = !!model?.model_files && model?.model_files?.length > 0;

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
                            <div className='col-12 text-left'>
                                <span className={modelCardStyle['model-card-name-label']}>Name: </span><span
                                className={modelCardStyle['model-card-name-value']}>{model?.name ?? ''}</span>
                            </div>
                            <div className='col-12 text-left'>
                                <span className={modelCardStyle['model-card-types-label']}>Types: </span><span
                                className={modelCardStyle['model-card-types-value']}>{(model?.model_types ?? []).join(',') ?? ''}</span>
                            </div>
                            <div className='col-12 text-left'>
                                <span className={modelCardStyle['model-card-papers-label']}>Papers: </span><span
                                className={modelCardStyle['model-card-papers-value']}>{(model?.papers ?? []).join(',') ?? ''}</span>
                            </div>
                            {hasReadme ?
                                <div className='col-12 text-left'>
                                    <span className={modelCardStyle['model-card-papers-label']}>Readme: </span>
                                    <a href={model?.readme_link} target='_blank'><span className={modelCardStyle['model-card-papers-value']}>{model?.readme_link ?? ''}</span></a>
                                </div> : null
                            }
                            {hasModelFiles ?
                                <div className='col-12 text-left'>
                                    <span className={modelCardStyle['model-card-papers-label']}>Mod Files: </span>
                                    {Object.keys(model?.model_files ?? []).map((label, index) =>
                                        <a href={model?.model_files[label]}>{label}{index < model?.model_files?.length - 1 ? ',' : ''}</a>)
                                    }
                                </div> : null
                            }
                        </div>
                        <div className='col-md-4 col-sm-12 text-right'>
                            {hasSource ?
                                <span className={modelCardStyle['model-card-source-label']}>
                                    SOURCE: {model?.source}
                                </span> : null
                            }
                        </div>
                    </div>
                </div>
                <div className={`${modelCardStyle['model-card-actions-container']} col-md-3 col-sm-12`}>
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
                                                    toggleSelectedForDownload(model['source_id'], value)}/>}
                                            label={'Select for download'}/>
                                    </FormControl>
                                </div>*/}
                                {hasDownloadLink ?
                                    <div className='col-12 text-center'>
                                        <span className={modelCardStyle['model-card-action']}>
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
                                    <div className='col-12 text-center'>
                                        <span className={modelCardStyle['model-card-action']}>
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

const ModelCard = forwardRef((props: IModelCardProps, ref) => _ModelCard(props, ref));

export {
    ModelCard
}