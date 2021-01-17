import {Button, ButtonBaseProps} from "@material-ui/core";

import buttonsStyle from './button.module.scss';

export type ICustomButtonVariant = 'primary' | 'secondary';

export interface ICustomButtonProps extends ButtonBaseProps {
    variant?: ICustomButtonVariant;

}


export function CustomButton({variant, children, onClick, style}: ICustomButtonProps) {
    return (<Button onClick={onClick}
                    style={style}
                    className={`${buttonsStyle['custom-button']} ${buttonsStyle[variant]}`}>
        {children}
    </Button>)
}
