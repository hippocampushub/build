import * as React from "react";
import {useEffect, useState} from "react";
import {getPage} from "../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../components/page/pageContainer";

import pageContentStyle from './page.module.scss';
import {searchDatasets, searchModels} from "../helpers/apiHelper";

function ModelsPage() {
    const [page, setPage] = React.useState<any>({});
    const [models, setModels] = React.useState<any>([]);
    const [modelDialogOpen, setModelDialogOpen] = React.useState(false);
    const [selectedModel, setSelectedModel] = React.useState<any>(null);

    const setup = async () => {
        try {
            const _page = await getPage('models');
            const _models = await searchModels({});
            setPage(_page);
            setModels(_models);
        } catch (error) {
        }
    }

    const _openDataSetDetail = (dataSet) => {
        setModelDialogOpen(true);
        setSelectedModel(dataSet);
    }

    const _onCloseDataSetDetail = () => {
        setModelDialogOpen(false);
        setSelectedModel(null);
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
                    {(models ?? []).map((item) => (<div className="row">
                        <div className='col-12'>

                        </div>
                    </div>))}
                </section>
            </div>
        </PageContainer>);
}

export default ModelsPage;
