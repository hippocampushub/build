import * as React from 'react';
import {IconButton, makeStyles} from "@material-ui/core";
import {Close as IconClose} from "@material-ui/icons";
import * as tagViewStyle from './tagView.module.scss';

const useIconButtonStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        outline: 'none',
        ['&:focus']: {
            outline: 'none'
        }
    }
}));


export function TagView({label, item, onRemoveClicked}: {
    label: string;
    item: any;
    onRemoveClicked?: (item: any) => void;
}) {

    const buttonClasses = useIconButtonStyles();

    return (<div className={tagViewStyle['tag-view']}>
        <span className={tagViewStyle['tag-view-label']}>{label}</span>
        <IconButton className={buttonClasses.root} onClick={() => onRemoveClicked(item)}>
            <IconClose htmlColor={'#fff'} fontSize={'small'}/>
        </IconButton>
    </div>);
}