import * as React from 'react';
import {Button} from '@material-ui/core';
import buttonsStyle from "./button.module.scss";
import {SvgIconComponent} from "@material-ui/icons";

export interface IExpandButton {
    label: string,
    icon: React.ReactNode,
    variant?: string,
    expanded: boolean,
    onClick?: () => void
}

export function ExpandButton({label, icon, variant, expanded, onClick}: IExpandButton) {
    return (<Button onClick={onClick} className={`${buttonsStyle['expand-button']}`}>
        {expanded ?
            <div>
                {icon} {label}
            </div> :
            <div>
                {icon}
            </div>
        }
    </Button>);
}
