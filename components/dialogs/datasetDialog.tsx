import {Button, Typography, Divider} from '@material-ui/core';
import {DialogContainer} from './dialogContainer';
import {CloudDownload as IconDownload} from "@material-ui/icons";
import {checkIfArrayNotEmpty, checkIfNotEmpty} from '../../helpers/validatorHelper';

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
                    <Divider style={{marginTop: 20}}/>
                    <div className='row' style={{marginTop: 20}}>
                        {checkIfArrayNotEmpty(dataSet?.modalities ?? []) ?
                            <div className='col-4'>
                                <Typography variant='subtitle2'>
                                    Modalities
                                </Typography>
                                <ul>
                                    {dataSet?.modalities?.map((item) => (<li>
                                        {item}
                                    </li>))}
                                </ul>
                            </div> : null
                        }
                        {checkIfArrayNotEmpty(dataSet?.methods ?? []) ?
                            <div className='col-4'>
                                <Typography variant='subtitle2'>
                                    Methods
                                </Typography>
                                <ul>
                                    {dataSet?.methods?.map((item) => (<li>
                                        {item}
                                    </li>))}
                                </ul>
                            </div> : null
                        }
                        {checkIfArrayNotEmpty(dataSet?.keywords ?? []) ?
                            <div className='col-4'>
                                <Typography variant='subtitle2'>
                                    Keywords
                                </Typography>
                                <ul>
                                    {dataSet?.keywords?.map((item) => (<li>
                                        {item}
                                    </li>))}
                                </ul>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </DialogContainer>)
}
