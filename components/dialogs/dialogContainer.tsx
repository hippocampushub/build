import * as React from 'react';
import {Close as IconClose} from '@material-ui/icons';
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogProps, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";
import parse from 'html-react-parser';

import dialogContainerStyle from './dialog.module.scss';
import {useIconButtonStyles} from "../../style/style";

interface IDialogContainerProps extends DialogProps {
    title?: string;
    subtitle?: string;
    actions?: any[];
    height?: number|string;
    onClose?: () => void;
}

interface IDialogActions {
    label: string;
    onClick: () => void;
}

const useDialogStyles = (height) => makeStyles((theme) =>  ({
    paper: {
        borderTop: '10px solid #333',
        borderRadius: 10,
        height: height ?? 'auto'
    }
}));

export function DialogContainer({open, title, subtitle, children, actions, height, onClose, ...props}: IDialogContainerProps) {
    const classes = useDialogStyles(height)();

    const iconButtonStyles = useIconButtonStyles();
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
                    <IconButton onClick={onClose} className={iconButtonStyles.root}>
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
