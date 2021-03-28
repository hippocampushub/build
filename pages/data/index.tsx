import * as React from 'react';
import {useEffect} from "react";
import {useRouter} from "next/router";
import {getTypes} from "../../helpers/apiHelper";
import PageContainer from "../../components/page/pageContainer";
import pageContentStyle from "../page.module.scss";
import {Typography} from "@material-ui/core";
import Spinner from "../../components/spinner/spinner";
import {getPage} from "../../helpers/dataHelper";
import DataTypeCtaButton from "../../components/cta/dataTypeCtaButton";
import constants from "../../constants";

function DataHomePage() {
    const router = useRouter();

    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState<any>({});
    const [dataTypes, setDataTypes] = React.useState<any>([]);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        const _page = await getPage('data');
        const {values: types} = await getTypes('dataset');
        setPage(_page);
        setDataTypes(types);
        setLoading(false);
    }

    const _ctaAction = async (type: string) => {
        await router.push(`/data/${type}`);
    }

    const _getDataTypeLabel = (type: string) => {
        return constants.DATA_TYPE_LABELS[type] ?? type;
    }

    return (<PageContainer variant={page?.variant} mainClassName={'with-fixed-header'} fixedHeader={true}>
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
                {(dataTypes ?? []).map((item) => <div className='row' style={{marginTop: 20}}>
                    <div className='col-12'>
                        <DataTypeCtaButton type={_getDataTypeLabel(item)} action={(type: string) => _ctaAction(item)}/>
                    </div>
                </div>)}
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

export default DataHomePage;