import * as React from "react";
import {DialogContainer} from "./dialogContainer";
import {Divider, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";
import constants from "../../constants";

const useStyles = makeStyles((theme) => ({
    dialog: {
      height: '80vh',
    },
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
        maxWidth={'lg'}
        title={modelName ?? ''}
        onClose={onClose}
        height={'80vh'}
        className={classes.dialog}>
        <div>
            <div className='row' style={{marginTop: 20}}>
                <div className='col-12'>
                    <iframe src={`${constants.MORPHOLOGY_VIEWER_BASE_URL}${modelUrl}`} className={classes.iframe}/>
                </div>
            </div>
        </div>
    </DialogContainer>);
}