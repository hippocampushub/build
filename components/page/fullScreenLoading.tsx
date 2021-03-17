import * as React from 'react';
import * as fullScreenLoadingStyle from './fullScreenLoading.module.scss';
import {getImageUrlByPath} from "../../helpers/imageHelper";

export function FullScreenLoading({}) {
    return (<div className={fullScreenLoadingStyle['container']}>
        <div className={fullScreenLoadingStyle['logo-container']}>
            <img src={getImageUrlByPath('/assets/images/HFH_community_logo_02_orange_w_bkg.svg')}/>
        </div>
    </div>);
}