import * as React from "react";
import {CustomButton} from "../buttons/buttons";
import {Card, makeStyles, Typography} from "@material-ui/core";
import constants from "../../constants";

import * as hodgkinHuxleyBaloonStyle from './index.module.scss';
import {TagView} from "../tags/tagView";
import {hashCode} from "../../helpers/hashHelper";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
    }
}));

export function HodgkinHuxleyBaloon({
    morphology,
    electrophysiologies,
    modFiles,
    removeMorphology,
    removeElectrophysiology,
    removeModFile,
    clear,
    variant
}: {
    morphology: any;
    electrophysiologies: any[];
    modFiles: any[];
    removeMorphology: () => void;
    removeElectrophysiology: (item: any) => void;
    removeModFile: (item: any) => void;
    clear: () => void;
    variant?: string;
}) {
    const classes = useStyles();

    const _sendToHodgkinHuxley = () => {
        const HFFComm: any = {};
        if (!!morphology) {
            const fileUrlSplitted = (morphology?.url ?? '').split('.');
            const fileExtension = fileUrlSplitted.length > 1 ? fileUrlSplitted[fileUrlSplitted.length - 1] : '';
            HFFComm.morphology = {
                name: encodeURIComponent(`${morphology?.name}`),
                url: encodeURIComponent(morphology?.url)
            }
        }
        if (!!electrophysiologies) {
            HFFComm.electrophysiologies = electrophysiologies?.map((item) => ({
                name: encodeURIComponent(item?.name),
                url: encodeURIComponent(item?.url),
                metadata: encodeURIComponent(item?.metadata?.url ?? null)
            }));
        }
        if (!!modFiles && modFiles?.length > 0) {
            HFFComm.modFiles = modFiles?.map((item) => ({
                name: encodeURIComponent(item?.label),
                url: encodeURIComponent(item?.url)
            }));
        }
        if (!!window) {
            let url = `${constants.HODGKIN_HUXLEY_BASE_URL}/`;
            if (Object.keys(HFFComm).length > 0) {
                url += `hhf-comm?hhf_dict=${JSON.stringify({[constants.HHF_COMM]: HFFComm})}`;
            }
            window.open(url);
        }

        //_clear();
    }

    const _onRemoveMorphology = () => {
        if (!!removeMorphology) {
            removeMorphology();
        }
    }

    const _onRemoveElectrophysiology = (item: any) => {
        if (!!removeElectrophysiology) {
            removeElectrophysiology(item);
        }
    }

    const _onRemoveModFile = (item: any) => {
        if (!!removeModFile) {
            removeModFile(item);
        }
    }

    const _clear = () => {
        if (!!clear) {
            clear();
        }
    }

    const hasMorphology = !!morphology;
    const hasElectrophysiology = !!electrophysiologies && electrophysiologies?.length > 0;
    const hasModFiles = !!modFiles && modFiles?.length > 0;

    return (<div>
        <Card classes={classes}>
            <div
                className={`${hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon']} ${!!variant ? hodgkinHuxleyBaloonStyle[variant] : null}`}>
                <div className='row'>
                    <div className='col-12'>
                        <Typography className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-header-label']}
                                    variant='subtitle1'>
                            Hodgkin-Huxley Neuron Builder
                        </Typography>
                    </div>
                    <div className='col-6'>
                        {hasMorphology ?
                            <div className='row'>
                                <div className='col-12'>
                                <span
                                    className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Morphology:</span>
                                    <TagView label={morphology?.name} item={morphology}
                                             onRemoveClicked={_onRemoveMorphology}/>
                                </div>
                            </div> : null
                        }
                        {hasElectrophysiology ?
                            <div className='row'>
                                <div className='col-12'>
                                <span
                                    className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Electrophysiologies:</span>
                                    {electrophysiologies?.map((item) =>
                                        <TagView key={`electrophysiology-${hashCode(JSON.stringify(item))}`}
                                                 label={item?.name} item={item}
                                                 onRemoveClicked={_onRemoveElectrophysiology}/>
                                    )}
                                </div>
                            </div> : null
                        }
                        {hasModFiles ?
                            <div className='row' style={{marginTop: 20}}>
                                <div className='col-12'>
                                <span
                                    className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Mod File(s):</span>
                                    {modFiles?.map((item) =>
                                        <TagView
                                            key={`model-${hashCode(JSON.stringify(item))}`}
                                            label={item?.label}
                                            item={item}
                                            onRemoveClicked={_onRemoveModFile}/>
                                    )}
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className='col-6 text-right'>
                        <CustomButton onClick={() => _sendToHodgkinHuxley()}
                                      style={{float: 'right', fontSize: 12}}
                                      isCta={true}>
                            Launch HH Neuron Builder
                        </CustomButton>
                        {hasMorphology || hasModFiles ?
                            <CustomButton onClick={() => _clear()}
                                          style={{float: 'right', fontSize: 12, marginRight: 20}}
                                          isCta={true}>
                                CLEAR ALL
                            </CustomButton> : null
                        }
                    </div>
                </div>
            </div>
        </Card>
    </div>);
}