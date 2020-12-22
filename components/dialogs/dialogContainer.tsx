import * as React from 'react';
import {Close as IconClose} from '@material-ui/icons';
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogProps, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import parse from 'html-react-parser';

import dialogContainerStyle from './dialog.module.scss';

interface IDialogContainerProps extends DialogProps {
    title?: string;
    subtitle?: string;
    actions?: any[];
    onClose?: () => void;
}

interface IDialogActions {
    label: string;
    onClick: () => void;
}

const useDialogStyles = makeStyles((theme) => ({
    paper: {
        borderTop: '10px solid #333',
        borderRadius: 10
    }
}));

export function DialogContainer({open, title, subtitle, children, actions, onClose, ...props}: IDialogContainerProps) {
    const classes = useDialogStyles();
    return (<Dialog classes={classes} open={open} {...props}>
        <DialogTitle>
            <div className='row'>
                <div className='col-10'>
                    {checkIfNotEmpty(title) ?
                        <p className={dialogContainerStyle['dialog-title']}>{title}</p> : null
                    }
                    {checkIfNotEmpty(subtitle) ?
                        <p className={dialogContainerStyle['dialog-subtitle']}>{parse(subtitle)}</p> : null
                    }
                </div>
                <div className='col-2 text-right'>
                    <IconButton onClick={onClose}>
                        <IconClose/>
                    </IconButton>
                </div>
            </div>
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        {!!actions && actions.length > 0 ?
            <DialogActions>
            </DialogActions> : null
        }
    </Dialog>
)
}
