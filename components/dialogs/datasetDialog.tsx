import {Button} from '@material-ui/core';
import {DialogContainer} from './dialogContainer';
import {CloudDownload as IconDownload} from "@material-ui/icons";
import {checkIfNotEmpty} from '../../helpers/validatorHelper';

export function DataSetDialog({open, dataSet, onClose}) {
    return (<DialogContainer
        open={open}
        fullWidth={true}
        maxWidth={'xl'}
        title={dataSet?.title}
        subtitle={dataSet?.citation}
        onClose={onClose}>
        <div>
            <div className='row'>
                <div className='col-12'>
                    {checkIfNotEmpty(dataSet?.dataDescriptor) ?
                        <div className='row'>
                            <div className='col-12'>
                                <Button onClick={() => window.open(dataSet?.dataDescriptor)}>
                                    <IconDownload/> Data Descriptor
                                </Button>
                            </div>
                        </div> : null
                    }

                </div>
            </div>
            <div className='row' style={{marginTop: 20}}>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-12'>
                            {dataSet?.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DialogContainer>)
}
