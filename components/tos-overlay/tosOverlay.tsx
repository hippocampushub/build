import * as React from 'react';
import * as tosStyle from './tos.module.scss';
import {CustomButton} from "../buttons/buttons";
import {SanitizedHtml} from "../sanitizedHtml";

export function TosOverlay({tos, agreeTos}) {

    return (<div className={tosStyle['tos-overlay-container']}>
        <div className={tosStyle['tos-overlay-main-container']}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <SanitizedHtml content={tos?.content ?? ''} style={{fontSize: 26}}/>
                    </div>
                    <div className='col-12 text-right' style={{marginTop: 50}}>
                        <CustomButton style={{margin: '0 auto'}} onClick={agreeTos}>
                            I Agree
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
