import {getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";
import * as React from "react";
import {useEffect, useState} from "react";
import {DataSetCard} from "../components/cards/dataSetCard";
import {DataSetDialog} from "../components/dialogs/datasetDialog";

import pageContentStyle from './page.module.scss';
import {getFilters, searchDatasets} from "../helpers/apiHelper";
import {FormFilter} from "../components/forms/filter";

function DataPage() {
    const [page, setPage] = React.useState<any>({});
    const [dataSets, setDataSets] = React.useState<any>([]);
    const [dataSetDialogOpen, setDataSetDialogOpen] = React.useState(false);
    const [regionFilters, setRegionFilters] = React.useState<any[]>([]);
    const [selectedDataSet, setSelectedDataSet] = React.useState<any>(null);

    const setup = async () => {
        try {
            const _page = await getPage('data');
            const {regions} = await getFilters('datasets');
            const {total, items} = await searchDatasets({});
            setPage(_page);
            setRegionFilters(regions);
            setDataSets(items);
        } catch (error) {

        }
    }

    const _openDataSetDetail = (dataSet) => {
        setDataSetDialogOpen(true);
        setSelectedDataSet(dataSet);
    }

    const _onCloseDataSetDetail = () => {
        setDataSetDialogOpen(false);
        setSelectedDataSet(null);
    }

    useEffect(() => {
        setup();
    }, []);


    return (
        <PageContainer>
            <div className={`container ${pageContentStyle['page-container']}`}>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h4">
                            {page.title}
                        </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {page.content}
                    </div>
                </div>
                <section>
                    <div className='row' style={{marginTop: 20, marginBottom: 20}}>
                        <div className='col-12'>
                            <FormFilter
                                regions={regionFilters}/>
                        </div>
                    </div>
                    {(dataSets ?? []).map((item) => (<div className="row">
                        <div className='col-12'>
                            <DataSetCard dataSet={item} onClick={() => _openDataSetDetail(item)}/>
                        </div>
                    </div>))}
                </section>
            </div>
            <DataSetDialog open={dataSetDialogOpen}
                           dataSet={selectedDataSet}
                           onClose={_onCloseDataSetDetail}/>
        </PageContainer>);
}

export default DataPage;
