import * as React from "react";
import {useEffect} from "react";
import { connect } from 'react-redux';
import {Typography} from "@material-ui/core";
import Lightbox from "react-image-lightbox";
import {CloudDownload as IconDownload} from "@material-ui/icons";
import Spinner from "../../components/spinner/spinner";
import PageContainer from "../../components/page/pageContainer";
import {MorphologyCard} from "../../components/cards/morphologyCard";
import {ElectrophysiologyCard} from "../../components/cards/electrophysiologyCard";
import {ConnectionCard} from "../../components/cards/connectionCard";
import {CustomButton} from "../../components/buttons/buttons";
import {clear, removeModFile, setMorphology} from "../../actions/hodgkinHuxley.actions";

import {getFilters, searchDatasets, downloadAllDatasets, downloadDatasets, getTypes} from "../../helpers/apiHelper";
import {FormFilter} from "../../components/forms/filter";
import constants from "../../constants";
import pageContentStyle from '../page.module.scss';
import {ItemsCountBaloon} from "../../components/baloons/itemsCountBaloon";
import {MorphologyViewerDialog} from "../../components/dialogs/morphologyViewerDialog";
import {ISearchParams} from "../../interfaces";
import {HodgkinHuxleyBaloon} from "../../components/hodgkin-huxley-baloon";
import {AgreeDownloadDialog} from "../../components/dialogs/agreeDownloadDialog";
import {downloadFile} from "../../helpers/downloadHelper";
import 'react-image-lightbox/style.css';

const _typeCards = {
    'morphology': MorphologyCard,
    'electrophysiology': ElectrophysiologyCard,
    'connection': ConnectionCard
}

const lightboxStyles = () => ({
    content: {
        top: (window?.pageYOffset ?? 0) > 60 ? 0 : 60
    }
})

const _DataPage = (props) => {
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState<any>({});
    const [dataSets, setDataSets] = React.useState<any>([]);
    const [filters, setFilters] = React.useState<any>(null);
    const [selectedFilters, setSelectedFilters] = React.useState<any>(null);

    const [selectedQuery, setSelectedQuery] = React.useState('');

    const [selectedForDownloads, setSelectedForDownloads] = React.useState<string[]>([]);

    const [numPage, setNumPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [totalItems, setTotalItems] = React.useState<number>(0);

    const [hitsPerPage, setHitsPerPage] = React.useState<number>(constants.DEFAULT_HITS_PER_PAGE)

    const [openMorphologyViewer, setOpenMorphologyViewer] = React.useState(false);
    const [openAgreeDownloadDialog, setOpenAgreeDownloadDialog] = React.useState(false);

    const [selectedMorphologyViewerModel, setSelectedMorphologyViewerModel] = React.useState(null);
    const acceptDownloadCallback = React.useRef<any>(() => null);

    const [lightboxImg, setLightboxImg] = React.useState<string | null>(null);

    const {
        params,
        selectedMorphologyForBuilding,
        selectedModFilesForBuilding,
        setMorphologyForBuilding,
        removeModFileForBuilding,
        clearHodgkinHuxley
    } = props;


    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            //const _page = await getPage('data');
            const _filters = await getFilters({
                indexName: 'dataset',
                type: params?.type
            });
            const {total_page: _totalPages, total: _totalItems, items} = await searchDatasets({
                data_type: params?.type ?? null,
                query: selectedQuery,
                filters: selectedFilters,
                page: numPage,
            });
            setFilters(_filters)
            setTotalPages(_totalPages)
            setTotalItems(_totalItems)
            setDataSets(items);
            setLoading(false);
        } catch (error) {

        }
    }

    const _onChangeFilters = (key, value) => {
        if (!!key) {
            if (key.split('.').length === 1) {
                setSelectedFilters({
                    ...selectedFilters,
                    [key]: value
                });
                return;
            }
            const prefixKey = key.split('.')[0];
            const itemKey = key.split('.')[1];
            const prefixKeyValue = !!selectedFilters ? selectedFilters[prefixKey] ?? {} : {};
            setSelectedFilters({
                ...selectedFilters,
                [prefixKey]: {
                    ...prefixKeyValue,
                    [itemKey]: value
                }
            });
        }
    }

    const _onChangeQuery = async (query: string) => {
        setSelectedQuery(query);
        if (query?.trim()?.length < constants.MIN_SEARCH_LENGTH) {
            await _search({
                query
            });
        }
    }

    const _search = async ({query, filters, hitsPerPage}: ISearchParams = {}) => {
        console.log('@@@@requestSearch');
        const page = 0
        setNumPage(0);
        setLoading(true);
        const _filters = filters !== undefined ? filters : selectedFilters;
        const {total_page: _totalPages, total: _totalItems, items} = await searchDatasets({
            data_type: params?.type ?? null,
            query: query ?? selectedQuery,
            filters: _filters,
            page,
            hitsPerPage
        });
        console.log('@@@@@@@totalPages', _totalPages);
        console.log('@@@@@@@totalItems', _totalItems);
        setDataSets(items);
        setTotalPages(_totalPages)
        setTotalItems(_totalItems);
        setLoading(false);
    }

    const _loadMore = async () => {
        const page = numPage + 1;
        setNumPage(page);
        setLoading(true);
        const {total_page: _totalPages, total: _totalItems, items} = await searchDatasets({
            data_type: params?.type ?? null,
            query: selectedQuery,
            filters: selectedFilters,
            hitsPerPage,
            page,
        });
        const allDataSets = [...dataSets, ...items]
        setDataSets(allDataSets)
        setTotalItems(_totalItems);
        setTotalPages(_totalPages)
        setLoading(false);
    }

    const _onHitsPerPageChange = async (value) => {
        setHitsPerPage(value)
        await _search({
            hitsPerPage: value
        });
    }

    const _applyFilters = async () => {
        await _search();
    }

    const _resetFilters = async () => {
        setSelectedFilters(null)
        await _search({
            query: '',
            filters: null
        });
    }

    const _downloadAll = () => {
        _askForDownload({
            callback: () => {
                window.open(downloadAllDatasets(params?.type))
            }
        });
    }

    const _downloadSelectedDatasets = () => {
        _askForDownload({
            callback: () => {
                window.open(downloadDatasets(selectedForDownloads))
            }
        });
    }

    const _openMorphologyViewer = ({modelName, modelUrl}: {
        modelName: string;
        modelUrl: string;
    }) => {
        setOpenMorphologyViewer(true);
        setSelectedMorphologyViewerModel({
            modelName,
            modelUrl
        });
    }

    const _closeMorphologyViewer = () => {
        setOpenMorphologyViewer(false);
        setSelectedMorphologyViewerModel(null);
    }

    const _onCloseLightBox = () => {
        setLightboxImg(null);
    }

    const _toggleSelectForDownload = async (id, selected) => {
        console.log('@@@@@@@toggleSelectForDownload', id, selected)
        if (selected) {
            const newValues = [...selectedForDownloads];
            newValues.push(id);
            setSelectedForDownloads(newValues)
        } else {
            const newValues = [...selectedForDownloads];
            const elIndex = newValues.indexOf(id);
            if (elIndex > -1) {
                newValues.splice(elIndex, 1);
                setSelectedForDownloads(newValues);
            }
        }
    }

    const _selectMorphologyForBuilding = (item) => {
        setMorphologyForBuilding(!!item ? {
            name: item?.name,
            url: item?.download_link
        } : null);
    }

    const _askForDownload = ({url, callback}: {
        url?: string;
        callback?: () => void;
    }) => {
        if (!!url && url.trim().length > 0) {
            acceptDownloadCallback.current = () => downloadFile(url);
        } else if (!!callback) {
            acceptDownloadCallback.current = callback;
        }
        setOpenAgreeDownloadDialog(true);
    }

    const _acceptDownloadCallback = () => {
        setOpenAgreeDownloadDialog(false);
        if (!!acceptDownloadCallback?.current) {
            acceptDownloadCallback?.current();
            acceptDownloadCallback.current = null;
        }
    }

    const _cancelDownloadCallback = () => {
        setOpenAgreeDownloadDialog(false);
        if (!!acceptDownloadCallback?.current) {
            acceptDownloadCallback.current = null;
        }
    }

    const hasMoreItems = numPage < totalPages - 1;

    const hasData = !!dataSets && dataSets.length > 0;

    const hasDownloadableFiles = !!dataSets && dataSets.length > 0 && dataSets.filter((item) => !!item.download_link).length > 0;

    const CardType = _typeCards[params?.type];

    const countBaloonClassName = !!hasDownloadableFiles && !!selectedForDownloads && selectedForDownloads.length > 0 ? 'col-md-6' : 'col-md-8';

    const downloadBlockClassName = !!hasDownloadableFiles && !!selectedForDownloads && selectedForDownloads.length > 0 ? 'col-md-6' : 'col-md-4';

    const pageVariant = page?.variant ?? 'dark';

    return (
        <PageContainer variant={pageVariant} mainClassName={'with-fixed-header'} fixedHeader={true}>
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
                    <div className='row' style={{marginTop: 20}}>
                        <div className='col-12'>
                            <FormFilter
                                variant={pageVariant}
                                query={selectedQuery}
                                filters={filters}
                                selectedFilters={selectedFilters}
                                selectedHitsPerPage={hitsPerPage}
                                onQueryChange={(value) => _onChangeQuery(value)}
                                onRequestSearch={() => _search()}
                                onChangeHitsPerPage={(value) => _onHitsPerPageChange(value)}
                                onChangeFilters={(key: string, value: any) => _onChangeFilters(key, value)}
                                applyFilters={() => _applyFilters()}
                                resetFilters={() => _resetFilters()}/>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: 20}}>
                        <div className={countBaloonClassName}>
                            <ItemsCountBaloon
                                label='Total items'
                                count={totalItems}/>
                        </div>
                        <div className={`${downloadBlockClassName} text-right`}>
                            {/*{!!hasDownloadableFiles ?
                                <CustomButton onClick={() => _downloadAll()} style={{float: 'right', fontSize: 16}}>
                                    <IconDownload/> <span style={{marginLeft: 5}}>Download All</span>
                                </CustomButton> : null
                            }*/}
                            {!!selectedForDownloads && selectedForDownloads.length > 0 ?
                                <CustomButton onClick={() => _downloadSelectedDatasets()} style={{float: 'right', marginRight: 10, fontSize: 16}}>
                                    <IconDownload/> <span style={{marginLeft: 5}}>Download Selected</span>
                                </CustomButton> : null
                            }
                        </div>
                    </div>
                    <div className='row' style={{marginTop: 20}}>
                        <div className='col-12'>
                            <HodgkinHuxleyBaloon
                                variant={pageVariant}
                                morphology={selectedMorphologyForBuilding}
                                modFiles={selectedModFilesForBuilding}
                                removeMorphology={() => setMorphologyForBuilding(null)}
                                removeModFile={(item) => removeModFileForBuilding(item)}
                                clear={() => clearHodgkinHuxley()}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            {!hasData ?
                                <p>{loading ? '' : 'There are not data for search criteria'}</p> :
                                <div>{(dataSets ?? []).map((item) => (
                                    <div className="row" key={`row-dataset-${item?.id}`}>
                                        <div className='col-12'>
                                            <CardType
                                                onClick={() => null}
                                                dataSet={item}
                                                selectedForDownload={selectedForDownloads.includes(item['source_id'])}
                                                toggleSelectedForDownload={_toggleSelectForDownload}
                                                openMorphologyViewer={_openMorphologyViewer}
                                                openImageLightbox={(url) => setLightboxImg(url)}
                                                closImageLightbox={() => setLightboxImg(null)}
                                                selectForModelBuilder={_selectMorphologyForBuilding}
                                                askForDownload={_askForDownload}/>
                                        </div>
                                    </div>))}
                                </div>

                            }
                        </div>
                    </div>

                    {hasMoreItems ?
                        <div className='row' style={{marginTop: 20}}>
                            <div className='col-12 text-center'>
                                <CustomButton
                                    variant='primary'
                                    style={{margin: '0 auto', fontSize: 16}}
                                    onClick={() => _loadMore()}>
                                    Load More
                                </CustomButton>
                            </div>
                        </div> : null
                    }
                </section>
                {loading ?
                    <Spinner/> : null
                }
            </div>
            <MorphologyViewerDialog
                open={openMorphologyViewer}
                onClose={_closeMorphologyViewer}
                modelName={selectedMorphologyViewerModel?.modelName}
                modelUrl={selectedMorphologyViewerModel?.modelUrl}/>
            {!!lightboxImg ?
                <Lightbox
                    mainSrc={lightboxImg}
                    reactModalStyle={lightboxStyles()}

                    onCloseRequest={_onCloseLightBox}/> : null
            }
            <AgreeDownloadDialog open={openAgreeDownloadDialog}
                                 pageUrl={'https://facility-hub.cineca.it/neuro_morpho/useterm.jsp'}
                                 acceptDownloadCallback={_acceptDownloadCallback}
                                 cancelDownloadCallback={_cancelDownloadCallback}/>
        </PageContainer>
    );
};

const getStaticProps = ({params}) => ({
    props: {params}
});

const getStaticPaths = async () => {
    const {values: types} = await getTypes('dataset');
    const paths = (types ?? []).map((item) => ({
        params: {type: item}
    }));
    return {
        paths,
        fallback: false
    }
}

const mapStateToProps = (state, props) => ({
    selectedMorphologyForBuilding: state?.hodgkinHuxley?.morphology ?? null,
    selectedModFilesForBuilding: state?.hodgkinHuxley?.modFiles ?? []
});

const mapDispatchToProps = (dispatch) => ({
    setMorphologyForBuilding: (item) => dispatch(setMorphology(item)),
    removeModFileForBuilding: (item) => dispatch(removeModFile(item)),
    clearHodgkinHuxley: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(_DataPage)

export {
    getStaticProps,
    getStaticPaths
}
