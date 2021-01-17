import * as React from "react";
import {useEffect, useState} from "react";
import {makeStyles, Typography} from "@material-ui/core";
import {getPage} from "../helpers/dataHelper";
import Spinner from "../components/spinner/spinner";
import PageContainer from "../components/page/pageContainer";
import {CustomButton} from "../components/buttons/buttons";

import {searchModels} from "../helpers/apiHelper";
import constants from "../constants";
import pageContentStyle from './page.module.scss';
import {ItemsCountBaloon} from "../components/baloons/itemsCountBaloon";
import {ModelCard} from "../components/cards/modelCard";

export interface ISearchParams {
    query?: string;
    region?: string;
    cellType?: string;
    species?: string;
    hitsPerPage?: number;
}

function ModelsPage() {
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState<any>({});
    const [models, setModels] = React.useState<any>([]);
    const [regionFilters, setRegionFilters] = React.useState<any[]>([]);
    const [cellTypeFilters, setCellTypeFilters] = React.useState<any[]>([]);
    const [speciesFilters, setSpeciesFilters] = React.useState<any[]>([]);
    const [selectedDataSet, setSelectedDataSet] = React.useState<any>(null);

    const [selectedQuery, setSelectedQuery] = React.useState('');
    const [selectedRegion, setSelectedRegion] = React.useState(null);
    const [selectedCellType, setSelectedCellType] = React.useState(null);
    const [selectedSpecies, setSelectedSpecies] = React.useState(null);

    const [selectedForDownloads, setSelectedForDownloads] = React.useState<string[]>([]);

    const [numPage, setNumPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [totalItems, setTotalItems] = React.useState<number>(0);

    const [hitsPerPage, setHitsPerPage] = React.useState<number>(constants.DEFAULT_HITS_PER_PAGE)



    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const _page = await getPage('models');
            const {total_page: _totalPages, total: _totalItems, items} = await searchModels({
                query: selectedQuery,
                region: selectedRegion,
                cell_type: selectedCellType,
                species: selectedSpecies,
                page: numPage,
            });
            setPage(_page);
            setTotalPages(_totalPages)
            setTotalItems(_totalItems)
            setModels(items);
            setLoading(false);
        } catch (error) {

        }
    }


    const _search = async ({
        query,
        region,
        cellType,
        species,
        hitsPerPage
}: ISearchParams = {}) => {
        console.log('@@@@requestSearch');
        const page = 0
        setNumPage(0);
        setLoading(true);
        const {total_page: _totalPages, total: _totalItems, items} = await searchModels({
            query: query ?? selectedQuery,
            region: region ?? selectedRegion,
            cell_type: cellType ?? selectedCellType,
            species: species ?? selectedSpecies,
            page,
            hitsPerPage
        });
        setModels(items)
        setTotalPages(_totalPages)
        setTotalItems(_totalItems);
        setLoading(false);
    }

    const _loadMore = async () => {
        const page = numPage + 1;
        setNumPage(page);
        setLoading(true);
        const {total_page: _totalPages, total: _totalItems, items} = await searchModels({
            query: selectedQuery,
            region: selectedRegion,
            cell_type: selectedCellType,
            species: selectedSpecies,
            page,
        });
        const allDataSets = [...models, ...items]
        setModels(allDataSets)
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
        setSelectedRegion(null);
        setSelectedCellType(null);
        setSelectedSpecies(null);
        await _search({
            query: '',
            region: '',
            cellType: '',
            species: ''
        });
    }

    const _toggleSelectForDownload = async(id, selected) => {
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

    const hasMoreItems = numPage < totalPages - 1;

    const hasData = !!models && models.length > 0;

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
                    {/*<div className='row' style={{marginTop: 20}}>
                        <div className='col-12'>
                            <FormFilter
                                query={selectedQuery}
                                regions={regionFilters}
                                cellTypes={cellTypeFilters}
                                species={speciesFilters}
                                selectedRegion={selectedRegion}
                                selectedCellType={selectedCellType}
                                selectedSpecies={selectedSpecies}
                                selectedHitsPerPage={hitsPerPage}
                                onQueryChange={(value) => setSelectedQuery(value)}
                                onRequestSearch={() => _search()}
                                onChangeHitsPerPage={(value) => _onHitsPerPageChange(value)}
                                onChangeRegion={(value) => setSelectedRegion(value)}
                                onChangeCellType={(value) => setSelectedCellType(value)}
                                onChangeSpecies={(value) => setSelectedSpecies(value)}
                                applyFilters={() => _applyFilters()}
                                resetFilters={() => _resetFilters()}/>
                        </div>
                    </div>*/}
                    <div className='row' style={{marginTop: 20}}>
                        <div className='col-md-6'>
                            <ItemsCountBaloon
                                label='Total items'
                                count={totalItems}/>
                        </div>
                        <div className='col-md-6 text-right'>
                           {/* <CustomButton onClick={() => _downloadAll()}>
                                <IconDownload/> <span style={{marginLeft: 5}}>Download All</span>
                            </CustomButton>
                            {!!selectedForDownloads && selectedForDownloads.length > 0 ?
                                <CustomButton onClick={() => _downloadSelectedDatasets()} style={{marginLeft: 10}}>
                                    <IconDownload/> <span style={{marginLeft: 5}}>Download Selected</span>
                                </CustomButton> : null
                            }*/}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            {!hasData ?

                                <p>{loading ? '': 'There are not data for search criteria'}</p> :
                                <div>{(models ?? []).map((item) => (
                                    <div className="row" key={`row-dataset-${item?.id}`}>
                                        <div className='col-12'>
                                            <ModelCard
                                                model={item}
                                                selectedForDownload={selectedForDownloads.includes(item['source_id'])}
                                                toggleSelectedForDownload={_toggleSelectForDownload}/>
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
        </PageContainer>
    );
}

export default ModelsPage;
