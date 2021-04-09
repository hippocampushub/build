import * as React from 'react';
import {Button, Typography, Divider, Tabs, Tab} from '@material-ui/core';
import {DialogContainer} from './dialogContainer';
import {CloudDownload as IconDownload} from "@material-ui/icons";
import {checkIfArrayNotEmpty, checkIfNotEmpty} from '../../helpers/validatorHelper';
import {TabPanel} from "../tabs/tabPanel";
import {FileLink} from "../files/fileLink";
import {CustomButton} from "../buttons/buttons";


export function DataSetDialog({open, dataSet, onClose}) {
    const [selectedTab, setSelectedTab] = React.useState<number>(0);

    const _downloadAll = (files) => {
        for (const file of files) {
            window.open(file.url);
        }
    }

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
                                <CustomButton onClick={() => window.open(dataSet?.dataDescriptor)}>
                                    <span><IconDownload/> Data Descriptor</span>
                                </CustomButton>
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
                    <Divider style={{marginTop: 20}}/>
                    <div className='row' style={{marginTop: 20}}>
                        <div className='col-12'>
                            <Tabs value={selectedTab} onChange={(event, value) => setSelectedTab(value)}>
                                <Tab label='Files'/>
                            </Tabs>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: 20}}>
                        <TabPanel value={selectedTab} index={0}>
                            {checkIfArrayNotEmpty(dataSet?.files) ?
                                <div className='col-12'>
                                    {/*<CustomButton onClick={() => _downloadAll(dataSet?.files)}>
                                        <span><IconDownload/> Download All</span>
                                    </CustomButton>*/}
                                    {(dataSet?.files ?? []).map((item) =>
                                        <div className='row' style={{marginTop: 10}}>
                                            <div className='col-12'>
                                                <FileLink file={item}/>
                                            </div>
                                        </div>)}
                                </div> : <p>No file presents</p>
                            }
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    </DialogContainer>)
}
