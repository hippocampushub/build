import * as React from "react";
import {inject, observer} from "mobx-react";

const HodgkinHuxleyBaloon = inject('dataStore')(
    observer((props) => {

        const {dataStore} = props;

        const HFFComm = (dataStore ?? {}).hhfcomm ?? {};
        const hasMorphology = !!HFFComm?.morphology;
        const hasModFiles = !!HFFComm?.mod_files && HFFComm?.mod_files?.length > 0;

        const morphology = hasMorphology ? HFFComm?.morphology : null;
        const modFiles = hasModFiles ? HFFComm?.mod_files : [];

        return (<div>
            <div className='row'>
                <div className='col-8'>
                    {hasMorphology ?
                        <div className='row'>
                            <div className='col-12'>
                                <span>Morphology:</span>
                                <a href={morphology?.url}>{morphology?.name}</a>
                            </div>
                        </div> : null
                    }
                    <div className='row'>
                        <div className='col-12'>
                            <span>Mod File(s):</span>
                            {hasModFiles ?
                                <span>
                                    {modFiles?.map((item) =>
                                        <a href={item?.url}>{item?.name}</a>
                                    )}
                                </span> : null

                            }
                        </div>
                    </div>
                </div>
                <div className='col-4'>

                </div>
            </div>
        </div>);
    }));

export {
    HodgkinHuxleyBaloon
}