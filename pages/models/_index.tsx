import * as React from 'react';
import {useEffect} from "react";
import {useRouter} from "next/router";
import {getTypes} from "../../helpers/apiHelper";
import PageContainer from "../../components/page/pageContainer";
import pageContentStyle from "../page.module.scss";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import Spinner from "../../components/spinner/spinner";
import {getPage} from "../../helpers/dataHelper";
import {ChevronRight as ArrowRight} from "@material-ui/icons";
import DataTypeCtaButton from "../../components/cta/dataTypeCtaButton";


function ModelsHomePage() {
    const router = useRouter();

    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState<any>({});
    const [dataTypes, setDataTypes] = React.useState<any>([]);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        const _page = await getPage('models');
        const {type: types} = await getTypes('model');
        setPage(_page);
        setDataTypes(types);
        setLoading(false);
    }

    const _ctaAction = async (type: string) => {
        await router.push(`/models/${type}`);
    }

    return (<PageContainer>
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
            <section style={{marginTop: 20}}>
                {(dataTypes ?? []).map((item) => <DataTypeCtaButton type={item} action={(type) => _ctaAction(type)}/>)}
            </section>
            {loading ?
                <Spinner/> : null
            }
        </div>
        {/*<DataSetDialog open={dataSetDialogOpen}
                           dataSet={selectedDataSet}
                           onClose={_onCloseDataSetDetail}/>*/}
    </PageContainer>);
}



export default ModelsHomePage;
