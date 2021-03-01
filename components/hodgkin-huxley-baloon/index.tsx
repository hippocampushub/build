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

const HodgkinHuxleyBaloon = inject('dataStore')(
    observer((props) => {

        const {dataStore} = props;

        const classes = useStyles();

        const _sendToHodgkinHuxley = () => {
            const HFFComm: any = {};
            if (!!dataStore?.hhfcomm && !!dataStore?.hhfcomm?.morphology) {
                HFFComm.morphology = {
                    name: dataStore?.hhfcomm?.morphology?.name,
                    url: dataStore?.hhfcomm?.morphology?.download_link
                }
            }
            if (!!dataStore?.hhfcomm && !!dataStore?.hhfcomm?.mod_files) {
                HFFComm.mod_files = dataStore?.hhfcomm?.mod_files?.map((item) => ({
                    name: item?.label,
                    url: item?.url
                }));
            }
            if (!!window) {
                const url = `${constants.HODGKIN_HUXLEY_BASE_URL}?params=${JSON.stringify({
                    [constants.HHF_COMM]: HFFComm
                })}`;
                window.open(url);
            }
        }

        const _onRemoveMorphology = (item: any) => {
            dataStore?.changeHHFComm({
                ...dataStore?.hhfcomm ?? {},
                morphology: null
            });
        }

        const _onRemoveModFile = (item: any) => {
            const modFiles = [...dataStore?.hhfcomm?.mod_files] ?? [];
            const index = modFiles?.findIndex((value) => hashCode(JSON.stringify(value)) == hashCode(JSON.stringify(item)));
            if (index > -1) {
                modFiles?.splice(index, 1);
            }
            dataStore?.changeHHFComm({
                ...dataStore?.hhfcomm ?? {},
                mod_files: modFiles ?? []
            });
        }

        const HFFComm = (dataStore ?? {}).hhfcomm ?? {};
        const hasMorphology = !!HFFComm?.morphology;
        const hasModFiles = !!HFFComm?.mod_files && HFFComm?.mod_files?.length > 0;

        const morphology = hasMorphology ? HFFComm?.morphology : null;
        const modFiles = hasModFiles ? HFFComm?.mod_files : [];

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
    }));

export {
    HodgkinHuxleyBaloon
}