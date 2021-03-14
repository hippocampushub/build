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
    modFiles,
    removeMorphology,
    removeModFile,
    clear,
    variant
}: {
    morphology: any,
    modFiles: any[],
    removeMorphology: () => void,
    removeModFile: (item: any) => void,
    clear: () => void,
    variant?: string
}) {
        const classes = useStyles();

        const _sendToHodgkinHuxley = () => {
            const HFFComm: any = {};
            if (!!morphology) {
                HFFComm.morphology = {
                    name: morphology?.name,
                    url: morphology?.url
                }
            }
            if (!!modFiles) {
                HFFComm.modFiles = modFiles?.map((item) => ({
                    name: item?.label,
                    url: item?.url
                }));
            }
            if (!!window) {
                const url = `${constants.HODGKIN_HUXLEY_BASE_URL}/hhf_dict=${JSON.stringify({
                    [constants.HHF_COMM]: HFFComm
                })}`;
                window.open(url);
            }

            _clear();

        }

        const _onRemoveMorphology = () => {
            if (!!removeMorphology) {
                removeMorphology();
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
        const hasModFiles = !!modFiles && modFiles?.length > 0;

        return (<Card classes={classes}>
            <div className={`${hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon']} ${!!variant ? hodgkinHuxleyBaloonStyle[variant] : null}`}>
            <div className='row'>
                <div className='col-12'>
                    <Typography className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-header-label']} variant='subtitle1'>
                        Hodgkin-Huxley Neuron Builder
                    </Typography>
                </div>
                <div className='col-8'>
                    {hasMorphology ?
                        <div className='row'>
                            <div className='col-12'>
                                <span className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Morphology:</span>
                                <TagView label={morphology?.name} item={morphology} onRemoveClicked={_onRemoveMorphology}/>
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
                <div className='col-4 text-right'>
                    <CustomButton onClick={() => _sendToHodgkinHuxley()}
                                  style={{float: 'right', fontSize: 12}}
                                  isCta={true}>
                        SEND TO HH NEURON BUILDER
                    </CustomButton>
                </div>
            </div>
        </div>
        </Card>);
}