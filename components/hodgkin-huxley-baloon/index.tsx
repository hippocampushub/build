import * as React from "react";
import {CustomButton} from "../buttons/buttons";
import {Card, makeStyles, Typography} from "@material-ui/core";
import constants from "../../constants";

import * as hodgkinHuxleyBaloonStyle from './index.module.scss';
import {TagView} from "../tags/tagView";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
    }
}));

export function HodgkinHuxleyBaloon({
    morphology,
    electrophysiology,
    modFiles,
    removeMorphology,
    removeElectrophysiology,
    removeModFile,
    clear,
    variant
}: {
    morphology: any;
    electrophysiology: any;
    modFiles: any[];
    removeMorphology: () => void;
    removeElectrophysiology: () => void;
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
                    name: encodeURIComponent(`${morphology?.name}.${fileExtension}`),
                    url: encodeURIComponent(morphology?.url)
                }
            }
            if (!!electrophysiology) {
                HFFComm.electrophysiology = {
                    name: encodeURIComponent(electrophysiology?.name),
                    url: encodeURIComponent(electrophysiology?.url)
                }
            }
            if (!!modFiles && modFiles.length > 0) {
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

    const _onRemoveElectrophysiology = () => {
        if (!!removeElectrophysiology) {
            removeElectrophysiology();
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
        const hasElectrophysiology = !!electrophysiology;
        const hasModFiles = !!modFiles && modFiles?.length > 0;

        return (<Card classes={classes}>
            <div className={`${hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon']} ${!!variant ? hodgkinHuxleyBaloonStyle[variant] : null}`}>
            <div className='row'>
                <div className='col-12'>
                    <Typography className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-header-label']} variant='subtitle1'>
                        Hodgkin-Huxley Neuron Builder
                    </Typography>
                </div>
                <div className='col-6'>
                    {hasMorphology ?
                        <div className='row'>
                            <div className='col-12'>
                                <span className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Morphology:</span>
                                <TagView label={morphology?.name} item={morphology} onRemoveClicked={_onRemoveMorphology}/>
                            </div>
                        </div> : null
                    }
                    {hasElectrophysiology ?
                        <div className='row'>
                            <div className='col-12'>
                                <span className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Electrophysiology:</span>
                                <TagView label={electrophysiology?.name} item={morphology} onRemoveClicked={_onRemoveElectrophysiology}/>
                            </div>
                        </div> : null
                    }
                    {hasModFiles ?
                        <div className='row' style={{marginTop: 20}}>
                            <div className='col-12'>
                                <span
                                    className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Mod File(s):</span>
                                    {modFiles?.map((item) =>
                                        <TagView label={item?.label} item={item} onRemoveClicked={_onRemoveModFile}/>
                                    )}
                            </div>
                        </div> : null
                    }
                </div>
                <div className='col-6 text-right'>
                    <CustomButton onClick={() => _sendToHodgkinHuxley()}
                                  style={{float: 'right', fontSize: 12}}
                                  isCta={true}>
                        GO TO HH NEURON BUILDER
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
        </Card>);
}