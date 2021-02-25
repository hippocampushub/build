import * as React from "react";
import {Button, ButtonBaseProps} from "@material-ui/core";
import {ChevronRight as ArrowRight} from "@material-ui/icons";
import * as buttonStyle from './button.module.scss';

export type ICustomButtonVariant = 'primary' | 'secondary';
``

export interface ICustomButtonProps extends ButtonBaseProps {
    variant?: ICustomButtonVariant;

}


export function CustomButton({children, onClick, style}: ICustomButtonProps) {
    return (<div className={`button-primary ${buttonStyle['custom-button']} ${buttonStyle['center']}`} onClick={onClick}>
        <div className='row'>
            <div className='col-9'>
                {children}
            </div>
            <div className={`col-3 ${buttonStyle['arrow-container']}`}>
                <ArrowRight htmlColor={'#fff'} fontSize='small'/>
            </div>
        </div>
    </div>)
}
