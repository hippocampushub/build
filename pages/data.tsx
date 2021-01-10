import * as React from "react";
import {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {getPage} from "../helpers/dataHelper";
import Spinner from "../components/spinner/spinner";
import PageContainer from "../components/page/pageContainer";
import {DataSetCard} from "../components/cards/dataSetCard";
import {DataSetDialog} from "../components/dialogs/datasetDialog";
import {CustomButton} from "../components/buttons/buttons";

import pageContentStyle from './page.module.scss';
import {getFilters, searchDatasets} from "../helpers/apiHelper";
import {FormFilter} from "../components/forms/filter";

function DataPage() {
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState<any>({});
    const [dataSets, setDataSets] = React.useState<any>([]);
    const [dataSetDialogOpen, setDataSetDialogOpen] = React.useState(false);
    const [regionFilters, setRegionFilters] = React.useState<any[]>([]);
    const [cellTypeFilters, setCellTypeFilters] = React.useState<any[]>([]);
    const [speciesFilters, setSpeciesFilters] = React.useState<any[]>([]);
    const [selectedDataSet, setSelectedDataSet] = React.useState<any>(null);

    const [query, setQuery] = React.useState('');
    const [selectedRegion, setSelectedRegion] = React.useState(null);
    const [selectedCellType, setSelectedCellType] = React.useState(null);
    const [selectedSpecies, setSelectedSpecies] = React.useState(null);

    const [numPage, setNumPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(1);

    const setup = async () => {
        try {
            const _page = await getPage('data');
            const {secondary_region: regionFilters, cell_type: cellTypes, species} = await getFilters('dataset');
            const {total_page: totalPages, items} = await searchDatasets({
                query,
                region: selectedRegion,
                cell_type: selectedCellType,
                species: selectedSpecies,
                page: numPage,
            });
            setPage(_page);
            setRegionFilters(regionFilters);
            setCellTypeFilters(cellTypes);
            setSpeciesFilters(species);
            setTotalPages(totalPages)
            setDataSets(items);
            setLoading(false);
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

    const _search = async () => {
        console.log('@@@@requestSearch');
        const page = 0
        setNumPage(0);
        setLoading(true);
        const {total_page: totalPages, items} = await searchDatasets({
            query,
            region: selectedRegion,
            cell_type: selectedCellType,
            species: selectedSpecies,
            page
        });
        setDataSets(items)
        setTotalPages(totalPages)
        setLoading(false);
    }

    const _loadMore = async () => {
        const page = numPage + 1;
        setNumPage(page);
        setLoading(true);
        const {total_page: totalPages, items} = await searchDatasets({
            query,
            region: selectedRegion,
            cell_type: selectedCellType,
            species: selectedSpecies,
            page,
        });
        const allDataSets = [...dataSets, ...items]
        setDataSets(allDataSets)
        setTotalPages(totalPages)
        setLoading(false);
    }

    const _applyFilters = async () => {
        await _search();
    }

    const _resetFilters = async () => {
        setSelectedRegion(null);
        setSelectedCellType(null);
        setSelectedSpecies(null);
        await _search();
    }

    useEffect(() => {
        setup();
    }, []);

    const hasMoreItems = numPage < totalPages - 1;

    const hasData = !!dataSets && dataSets.length > 0;

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
                                query={query}
                                regions={regionFilters}
                                cellTypes={cellTypeFilters}
                                species={speciesFilters}
                                selectedRegion={selectedRegion}
                                selectedCellType={selectedCellType}
                                selectedSpecies={selectedSpecies}
                                onQueryChange={(value) => setQuery(value)}
                                onRequestSearch={() => _search()}
                                onChangeRegion={(value) => setSelectedRegion(value)}
                                onChangeCellType={(value) => setSelectedCellType(value)}
                                onChangeSpecies={(value) => setSelectedSpecies(value)}
                                applyFilters={() => _applyFilters()}
                                resetFilters={() => _resetFilters()}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            {!hasData ?

                                <p>{loading ? '': 'There are not data for search criteria'}</p> :
                                <div>{(dataSets ?? []).map((item) => (
                                    <div className="row" key={`row-dataset-${item?.id}`}>
                                        <div className='col-12'>
                                            <DataSetCard dataSet={item} onClick={() => _openDataSetDetail(item)}/>
                                        </div>
                                    </div>))}</div>

                            }
                        </div>
                    </div>

                    {hasMoreItems ?
                        <div className='row' style={{marginTop: 20}}>
                            <div className='col-12 text-center'>
                                <CustomButton
                                    variant='primary'
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
            <DataSetDialog open={dataSetDialogOpen}
                           dataSet={selectedDataSet}
                           onClose={_onCloseDataSetDetail}/>
        </PageContainer>
    );
}

export default DataPage;
