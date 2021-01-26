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

const useDataTypeButtonStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 5,
        background: '#333',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 !important',
        minHeight: 100
    },
    mainContent: {
        paddingLeft: 16,
        paddingRight: 16,
        flexGrow: 1
    },
    title: {
        color: '#fff',
        fontFamily: 'Metropolis, sans-serif',
        fontSize: '24px',
        textTransform: 'uppercase',
    },
    arrowBox: {
        background: '#222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));


const DataTypeButton = ({type}) => {
    const router = useRouter();
    const classes = useDataTypeButtonStyles();

    const _goToDataTypePage = async () => {
        await router.push(`/data/${type}`);
    }

    return (<Card onClick={() => _goToDataTypePage()} className={classes.root}>
        <CardContent className={classes.content}>
            <div className={`row ${classes.mainContent}`}>
                <div className='col-10'>
                    <Typography variant='subtitle1' className={classes.title}>
                        {type}
                    </Typography>
                </div>
                <div className={`col-2 ${classes.arrowBox}`}>
                    <ArrowRight htmlColor={'#fff'} fontSize='large'/>
                </div>
            </div>
        </CardContent>
    </Card>);
}

function DataHomePage() {
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState<any>({});
    const [dataTypes, setDataTypes] = React.useState<any>([]);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        const _page = await getPage('data');
        const {type: types} = await getTypes('dataset');
        setPage(_page);
        setDataTypes(types);
        setLoading(false);
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
                {(dataTypes ?? []).map((item) => <DataTypeButton type={item}/>)}
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