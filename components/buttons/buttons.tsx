import * as React from "react";
import {Button, ButtonBaseProps} from "@material-ui/core";
import {ChevronRight as ArrowRight} from "@material-ui/icons";
import * as buttonStyle from './button.module.scss';

export type ICustomButtonVariant = 'primary' | 'secondary';
``

export interface ICustomButtonProps extends ButtonBaseProps {
    variant?: ICustomButtonVariant;
    isCta?: boolean;

}

export function CustomButton({children, onClick, style, isCta}: ICustomButtonProps) {
    return (<span className={`button-primary ${buttonStyle['custom-button']} text-center`}
                  style={style}
                  onClick={onClick}>
        <div className='row'>
            <div className={buttonStyle['children-container']}>
                {children}
            </div>
            {isCta ?
                <div className={`${buttonStyle['arrow-container']} text-center`}>
                    <ArrowRight htmlColor={'#fff'} fontSize='small'/>
                </div> : null
            }
        </div>
    </span>)
}
