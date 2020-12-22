import {Button} from '@material-ui/core';
import {DialogContainer} from './dialogContainer';
import {Save as IconDownload} from '@material-ui/icons';
import {checkIfArrayNotEmpty, checkIfNotEmpty} from '../../helpers/validatorHelper';

export function DataSetDialog({open, dataSet, onClose}) {
    return (<DialogContainer
        open={open}
        fullWidth={true}
        maxWidth={'lg'}
        fullScreen={true}
        title={dataSet?.title}
        onClose={onClose}>
        <div>
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-12'>
                            {dataSet?.description}
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    {checkIfNotEmpty(dataSet?.dataDescriptor) ?
                        <div className='row'>
                            <Button onClick={() => window.open(dataSet?.dataDescriptor)}>
                                <IconDownload/> Data Descriptor
                            </Button>
                        </div> : null
                    }

                </div>
            </div>
        </div>
    </DialogContainer>)
}
