import * as React from 'react';
import * as tosStyle from './tos.module.scss';
import {CustomButton} from "../buttons/buttons";

export function TosOverlay({tos, agreeTos}) {

    return (<div className={tosStyle['tos-overlay-container']}>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p>{tos?.content ?? ''}</p>
                </div>
                <div className='col-12 text-right'>
                    <CustomButton style={{margin: '0 auto'}} onClick={agreeTos}>
                        Agree
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>);
}
