import {CustomButton} from "../buttons/buttons";
import * as React from "react";

import * as sectionMenuStyle from './sectionMenu.module.scss';

export function SectionMenu({sections}: {
    sections: any[];
}) {
    return (<div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center'>
        <div className={sectionMenuStyle['section-menu-container']}>
            <div>
                <div className='row'>
                    {sections?.map((item) => <div className='col-lg-12 col-md-6 col-sm-6 text-center'>
                        <CustomButton
                            style={{fontSize: 11, margin: '5px auto'}}
                            onClick={() => window.location.href = `#${item?.id}`}>
                            {item?.header}
                        </CustomButton>
                    </div>)}
                </div>
            </div>
        </div>
    </div>);
}