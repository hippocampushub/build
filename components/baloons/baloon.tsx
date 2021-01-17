import * as React from 'react';
import baloonStyle from './baloon.module.scss';
import {PropsWithChildren} from "react";

export interface IBaloonProps extends PropsWithChildren<any> {}

export default function Baloon({children}: IBaloonProps) {
    return (<div className={baloonStyle['baloon-container']}>
        {children}
    </div>);
}