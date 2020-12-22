import * as React from 'react';
import {Close as IconClose} from '@material-ui/icons';
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogProps, IconButton} from '@material-ui/core';
import {checkIfNotEmpty} from "../../helpers/validatorHelper";

interface IDialogContainerProps extends DialogProps {
    title?: string;
    actions?: any[];
    onClose?: () => void;
}

interface IDialogActions {
    label: string;
    onClick: () => void;
}

export function DialogContainer({open, title, children, actions, onClose}: IDialogContainerProps) {
    return (<Dialog open={open}>
        <DialogTitle>
            <div className='row'>
                <div className='col-10'>
                    {checkIfNotEmpty(title) ?
                        <span>{title}</span> : null
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
