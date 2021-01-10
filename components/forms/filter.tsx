import * as React from 'react';
import {Card, makeStyles, Tooltip, Typography} from "@material-ui/core"
import {MenuItem, Select} from "@material-ui/core";
import {Icon, IconButton, FormControl, InputLabel} from '@material-ui/core'
import {FilterList as IconFilter, Close as IconClose} from "@material-ui/icons";
import SearchBar from 'material-ui-search-bar';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";

import filterStyle from './filter.module.scss';
import {CustomButton} from "../buttons/buttons";


const useStyles = makeStyles((theme) => ({
   root: {
       position: 'absolute',
       zIndex: 10,
       minWidth: 300
   }
}));

const useIconStyles = makeStyles((theme) => ({
    root: {
        outline: 'none',
        '&:hover, &:focus': {
            outline: 'none',
        }
    }
}));

export interface IFormFilterProps extends DefaultComponentProps<any> {
    query?: string,
    regions?: any[],
    cellTypes?: any[],
    species?: any[],
    onQueryChange?: (value: string) => void,
    onRequestSearch?: () => void,
    applyFilters?: () => void,
    resetFilters?: () => void
}

export function FilterBox({
    regions,
    cellTypes,
    species,
    selectedRegion,
    selectedCellType,
    selectedSpecies,
    onChangeRegion,
    onChangeCellType,
    onChangeSpecies,
    applyFilters,
    resetFilters
}) {
    const regionItems = (regions ?? []).map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>);
    const cellTypeItems = (cellTypes ?? []).map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)
    const speciesItems = (species ?? []).map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>);

    const classes = useStyles();

    const iconButtonClasses = useIconStyles();


    return (<Card classes={classes}>
        <div className={filterStyle['filter-box']}>
            <div className='row'>
                <div className='col-9'>
                    <Typography variant='subtitle2'>Filter</Typography>
                </div>
                <div className='col-3'>
                    <IconButton
                        className={iconButtonClasses.root}
                        onClick={() => resetFilters()}>
                        <IconClose/>
                    </IconButton>
                </div>
            </div>
            <div className='row' style={{marginTop: 10}}>
                <div className='col-12'>
                    <FormControl fullWidth={true}>
                        <InputLabel>Region</InputLabel>
                        <Select
                            fullWidth={true}
                            className={filterStyle['select-box']}
                            value={selectedRegion}
                            onChange={(event) => onChangeRegion(event.target.value as string ?? '')}>
                            {regionItems}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='row' style={{marginTop: 10}}>
                <div className='col-12'>
                    <FormControl fullWidth={true}>
                        <InputLabel>Cell Type</InputLabel>
                        <Select
                            fullWidth={true}
                            className={filterStyle['select-box']}
                            value={selectedCellType}
                            onChange={(event) => onChangeCellType(event.target.value as string ?? '')}>
                            {cellTypeItems}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='row' style={{marginTop: 10}}>
                <div className='col-12'>
                    <FormControl fullWidth={true}>
                        <InputLabel>Species</InputLabel>
                        <Select
                            fullWidth={true}
                            className={filterStyle['select-box']}
                            value={selectedSpecies}
                            onChange={(event) => onChangeSpecies(event.target.value as string ?? '')}>
                            {speciesItems}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='row' style={{marginTop: 10}}>
                <div className='col-12 text-center'>
                    <CustomButton
                        variant='primary'
                        onClick={() => applyFilters()}>
                        Apply Filters
                    </CustomButton>
                </div>
            </div>
        </div>
    </Card>);
}

export function FormFilter({
    query,
    regions,
    cellTypes,
    species,
    selectedRegion,
    selectedCellType,
    selectedSpecies,
    onQueryChange,
    onRequestSearch,
    onChangeRegion,
    onChangeCellType,
    onChangeSpecies,
    applyFilters,
    resetFilters
}: IFormFilterProps) {
    const [openFilter, setOpenFilter] = React.useState(false);

    const iconButtonClasses = useIconStyles();

    const toggleFilter = () => {
        setOpenFilter(!openFilter);
    }

    const _applyFilters = () => {
        applyFilters();
        setOpenFilter(false);
    }

    const _resetFilters = () => {
        resetFilters();
        setOpenFilter(false);
    }

    return (<div>
        <div className='row'>
            <div className='col-10'>
                <SearchBar
                    value={query}
                    onChange={onQueryChange}
                    onRequestSearch={onRequestSearch}
                />
            </div>
            <div className='col-2'>
                <Tooltip title={'Filter'}>
                    <IconButton
                        className={iconButtonClasses.root}
                        onClick={toggleFilter}>
                        <IconFilter/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
        <div className='row' style={{marginTop: 10}}>
            <div className='col-4 offset-8 right'>
                {openFilter ?
                    <FilterBox
                        regions={regions}
                        cellTypes={cellTypes}
                        species={species}
                        selectedRegion={selectedRegion}
                        selectedCellType={selectedCellType}
                        selectedSpecies={selectedSpecies}
                        onChangeRegion={onChangeRegion}
                        onChangeCellType={onChangeCellType}
                        onChangeSpecies={onChangeSpecies}
                        applyFilters={_applyFilters}
                        resetFilters={_resetFilters}/> : null
                }
            </div>
        </div>
    </div>);
}
