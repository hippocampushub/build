import {DialogContainer} from "./dialogContainer";
import {checkIfArrayNotEmpty, checkIfNotEmpty} from "../../helpers/validatorHelper";
import {CustomButton} from "../buttons/buttons";
import {CloudDownload as IconDownload} from "@material-ui/icons";
import {Divider, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";
import {TabPanel} from "../tabs/tabPanel";
import {FileLink} from "../files/fileLink";
import * as React from "react";
import constants from "../../constants";

const useStyles = makeStyles((theme) => ({
    iframe: {
        width: '100%',
        height: '100%',
        minHeight: 400,
        border: 0
    }
}));

export function MorphologyViewerDialog({open, onClose, modelName, modelUrl}) {

    const classes = useStyles();


    return (<DialogContainer
        open={open}
        fullWidth={true}
        maxWidth={'xl'}
        title={modelName ?? ''}
        onClose={onClose}>
        <div>
            <div className='row' style={{marginTop: 20}}>
                <div className='col-12'>
                    <iframe src={`${constants.MORPHOLOGY_VIEWER_BASE_URL}${modelUrl}`} className={classes.iframe}/>
                </div>
            </div>
        </div>
    </DialogContainer>);
}