import * as React from "react";
import {inject, observer} from "mobx-react";
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

export function HodgkinHuxleyBaloon({dataStore}) {
        const classes = useStyles();

        const _sendToHodgkinHuxley = () => {
            const HFFComm: any = {};
            if (!!dataStore?.morphology) {
                HFFComm.morphology = {
                    name: dataStore?.morphology?.name,
                    url: dataStore?.morphology?.url
                }
            }
            if (!!dataStore?.modFiles) {
                HFFComm.modFiles = dataStore?.modFiles?.map((item) => ({
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
            dataStore?.clear();
        }

        const _onRemoveMorphology = () => {
            dataStore?.setMorphology(null);
        }

        const _onRemoveModFile = (item: any) => {
            dataStore?.removeModFile(item);
        }

        const hasMorphology = !!dataStore?.morphology;
        const hasModFiles = !!dataStore?.modFiles && dataStore?.modFiles?.length > 0;

        const morphology = hasMorphology ? dataStore?.morphology : null;
        const modFiles = hasModFiles ? dataStore?.modFiles : [];

        return (<Card classes={classes}>
            <div className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon']}>
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
                                  style={{float: 'right'}}
                                  isCta={true}>
                        Send to Hodgkin-Huxley
                    </CustomButton>
                </div>
            </div>
        </div>
        </Card>);
};