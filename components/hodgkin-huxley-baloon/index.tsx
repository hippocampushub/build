import * as React from "react";
import {inject, observer} from "mobx-react";
import {CustomButton} from "../buttons/buttons";
import constants from "../../constants";
import filterStyle from "../forms/filter.module.scss";
import {Card, makeStyles, Typography} from "@material-ui/core";

import * as hodgkinHuxleyBaloonStyle from './index.module.scss';

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
            const HFFComm = (dataStore ?? {}).hhfcomm ?? {};
            if (!!window) {
                const url = `${constants.HODGKIN_HUXLEY_BASE_URL}?params=${JSON.stringify({
                    'HHF-Comm': HFFComm
                })}`;
                window.open(url);
            }
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
                    <Typography className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-header-label']} variant='subtitle'>
                        Hodgkin-Huxley
                    </Typography>
                </div>
                <div className='col-8'>
                    {hasMorphology ?
                        <div className='row'>
                            <div className='col-12'>
                                <span className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Morphology:</span>
                                <a href={morphology?.url}>{morphology?.name}</a>
                            </div>
                        </div> : null
                    }
                    <div className='row'>
                        <div className='col-12'>
                            <span className={hodgkinHuxleyBaloonStyle['hodgkin-huxley-baloon-label']}>Mod File(s):</span>
                            {hasModFiles ?
                                <span>
                                    {modFiles?.map((item) =>
                                        <a href={item?.url}>{item?.name}</a>
                                    )}
                                </span> : null

                            }
                        </div>
                    </div>
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