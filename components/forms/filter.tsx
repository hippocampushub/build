import * as React from 'react';
import {Card, ListItem, makeStyles, TextField, Tooltip, Typography} from "@material-ui/core"
import {MenuItem, Select} from "@material-ui/core";
import {Icon, IconButton, FormControl, InputLabel} from '@material-ui/core'
import {
    FilterList as IconFilter,
    Close as IconClose,
    Check as IconCheck,
    ClearAll as IconClear
} from "@material-ui/icons";
import SearchBar from 'material-ui-search-bar';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";

import filterStyle from './filter.module.scss';


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
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
    query?: string;
    regions?: any[];
    cellTypes?: any[];
    species?: any[];
    onQueryChange?: (value: string) => void;
    onRequestSearch?: () => void;
    onChangeHitsPerPage?: (value: number) => void;
    applyFilters?: () => void;
    resetFilters?: () => void;
}

export function FilterBox({
                              filters,
                              selectedFilters,
                              onChangeFilters,
                              closeFilters,
                              applyFilters,
                              resetFilters
                          }) {
    const classes = useStyles();

    const iconButtonClasses = useIconStyles();
    const suggestionFilters = Object.keys(filters).map((key) => filters[key]).filter((item) => item.type === 'suggestion');
    const [suggestionValue, setSuggestionValue] = React.useState(suggestionFilters.reduce((acc, item) => acc = {
        ...acc,
        [item.key]: ''
    }, {}));

    const _onChangeSuggestionValue = (key: string, text: string) => {
        setSuggestionValue({
            ...suggestionValue,
            [key]: text
        });
    }


    const renderMultipleFilter = (key: string, item: any) => (
        <div className='row'>
            <div className='col-12'>
                <FormControl fullWidth={true}>
                    <InputLabel>{item?.label}</InputLabel>
                    <Select
                        fullWidth={true}
                        className={filterStyle['select-box']}
                        value={!!selectedFilters ? selectedFilters[key] ?? null : null}
                        onChange={(event) => onChangeFilters(key, event.target.value as string ?? '')}>
                        {(item.values ?? []).map((value) => (
                            <MenuItem key={value} value={value}>{value}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );

    const renderSuggestionFilter = (key: string, item: any) => {
        const hasSuggestionFilter = !!suggestionValue[key] && suggestionValue[key].trim().length >= 3;
        const filteredItems = hasSuggestionFilter ? (item.values?.filter((item) => item.toLowerCase().includes(suggestionValue[key])) ?? []) : [];
        const hasItems = !!filteredItems && filteredItems.length > 0;
        return (
            <div className='row'>
                <div className='col-12'>
                    <TextField
                        fullWidth={true}
                        key={`suggestion-${key}`}
                        value={suggestionValue[key]}
                        label={item?.label}
                        onChange={(event) => _onChangeSuggestionValue(key, event.target.value)}
                    /><br/>
                    {hasItems ?
                        <FormControl fullWidth={true}>
                            <InputLabel>{item?.label}</InputLabel><br/>
                            <Select
                                fullWidth={true}
                                className={filterStyle['select-box']}
                                value={!!selectedFilters ? selectedFilters[key] ?? null : null}
                                onChange={(event) => onChangeFilters(key, event.target.value as string ?? '')}>
                                {(filteredItems ?? []).map((value) => (
                                    <MenuItem key={value} value={value}>{value}</MenuItem>
                                ))}
                            </Select>
                        </FormControl> : null
                    }
                </div>
            </div>
        )
    };

    const renderFilterMap = {
        'multiple': renderMultipleFilter,
        'suggestion': renderSuggestionFilter
    };

    const renderFilter = (key: string, filter: any) => {
        const renderMethod = renderFilterMap[filter.type];
        return renderMethod(key, filter);
    };


    return (<Card classes={classes}>
        <div className={filterStyle['filter-box']}>
            <div className='row'>
                <div className='col-9'>
                    <Typography variant='subtitle2'>Filter</Typography>
                </div>
                <div className='col-3 text-right'>
                    <IconButton
                        className={iconButtonClasses.root}
                        onClick={() => closeFilters()}>
                        <IconClose/>
                    </IconButton>
                </div>
            </div>
            {Object.keys(filters).map((key) => {
                const item = filters[key];
                return renderFilter(key, item);
            })}

            <div className='row' style={{marginTop: 10}}>
                <div className='col-12 text-center'>
                    <Tooltip title='Reset Filters'>
                        <IconButton onClick={() => resetFilters(false)}>
                            <IconClear/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Apply Filters'>
                        <IconButton onClick={() => applyFilters(false)}>
                            <IconCheck/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    </Card>);
}

export function FormFilter({
                               query,
                               filters,
                               selectedFilters,
                               selectedHitsPerPage,
                               onQueryChange,
                               onRequestSearch,
                               onChangeHitsPerPage,
                               onChangeFilters,
                               applyFilters,
                               resetFilters
                           }: IFormFilterProps) {
    const [openFilter, setOpenFilter] = React.useState(false);

    const iconButtonClasses = useIconStyles();

    const toggleFilter = () => {
        setOpenFilter(!openFilter);
    }

    const _closeFilters = () => {
        setOpenFilter(false);
    }

    const _applyFilters = (close) => {
        applyFilters();
        setOpenFilter(false);
    }

    const _resetFilters = (close) => {
        resetFilters();
        if (close) {
            setOpenFilter(false);
        }
    }

    const hitsPerPageItems = [10, 20, 50, 100].map((item) =>
        <ListItem key={`hits_per_page-${item}`}
                  value={item} style={{textAlign: 'right', outline: 'none', cursor: 'pointer'}}>
            {item}
        </ListItem>
    );

    return (<div>
        <div className='row'>
            <div className='col-9'>
                <SearchBar
                    value={query}
                    onChange={onQueryChange}
                    onRequestSearch={onRequestSearch}
                />
            </div>
            <div className='col-3 text-right'>
                <div className='row'>
                    <div className='col-8'>
                        <FormControl style={{minWidth: '100%'}}>
                            <InputLabel>Hits per page</InputLabel>
                            <Select
                                value={selectedHitsPerPage}
                                onChange={(event) => onChangeHitsPerPage(event.target.value as number)}>
                                {hitsPerPageItems}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-4'>
                        <Tooltip title={'Filter'}>
                            <IconButton
                                className={iconButtonClasses.root}
                                onClick={toggleFilter}>
                                <IconFilter/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
        <div className='row' style={{marginTop: 10}}>
            <div className='col-12'>
                {openFilter ?
                    <FilterBox
                        filters={filters}
                        selectedFilters={selectedFilters}
                        onChangeFilters={onChangeFilters}
                        closeFilters={_closeFilters}
                        applyFilters={_applyFilters}
                        resetFilters={_resetFilters}/> : null
                }
            </div>
        </div>
    </div>);
}
