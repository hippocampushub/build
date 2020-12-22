import {getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";
import * as React from "react";
import {useEffect, useState} from "react";
import {getDataSets} from "../helpers/dataHelper";
import {DataSetCard} from "../components/cards/dataSetCard";
import {DataSetDialog} from "../components/dialogs/datasetDialog";

function DataPage() {
    const [page, setPage] = React.useState<any>({});
    const [dataSets, setDataSets] = React.useState<any>([]);
    const [dataSetDialogOpen, setDataSetDialogOpen] = React.useState(false);
    const [selectedDataSet, setSelectedDataSet] = React.useState<any>(null);

    const setup = async () => {
        try {
            const _page = await getPage('data');
            const _dataSets = await getDataSets();
            setPage(_page);
            setDataSets(_dataSets);
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
            <div className="container">
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
