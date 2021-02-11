import * as React from 'react';
import {
    Card,
    ListItem,
    makeStyles,
    Checkbox,
    TextField,
    Tooltip,
    Typography,
    Icon,
    IconButton,
    FormControl,
    InputLabel,
    FormControlLabel
} from "@material-ui/core"
import {MenuItem, Select} from "@material-ui/core";

import {
    FilterList as IconFilter,
    Close as IconClose,
    Check as IconCheck,
    ClearAll as IconClear, CheckBox
} from "@material-ui/icons";
import SearchBar from 'material-ui-search-bar';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";

import filterStyle from './filter.module.scss';


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
    }
}));

const useLabelStyles = makeStyles((theme) => ({
    headerLabel: {
        fontFamily: 'Metropolis, sans-serif',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'capitalize'
    },
    filterLabel: {
        fontFamily: 'Metropolis, sans-serif',
        fontSize: 10,
        fontWeight: 600,
        textTransform: 'capitalize'
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
    const labelStyles = useLabelStyles();
    const suggestionFilters = Object.keys(filters).map((key) => filters[key]).filter((item) => item.type === 'suggestion');
    const [suggestionValue, setSuggestionValue] = React.useState(suggestionFilters.reduce((acc, item) => acc = {
        ...acc,
        [item.key]: ''
    }, {}));

    const _onChangeMultipleFilter = (key: string, value: any, checked: boolean) => {
        let newFilters = !!selectedFilters && !!selectedFilters[key] ? [...selectedFilters[key]] : [];
        if (!!checked) {
            newFilters.push(value);
        } else {
            const index = newFilters.findIndex(v => v === value);
            if (index > -1) {
                newFilters.splice(index, 1);
            }
        }
        onChangeFilters(key, newFilters);
    }

    const _onChangeSuggestionValue = (key: string, text: string) => {
        setSuggestionValue({
            ...suggestionValue,
            [key]: text
        });
    }


    const renderMultipleFilter = (key: string, item: any) => {
        let itemValue = null;
        if (!!key) {
            if (key.split('.').length === 1) {
                itemValue = !!selectedFilters ? selectedFilters[key] ?? null : null;
            } else {
                const prefixKey = key.split('.')[0];
                const itemKey = key.split('.')[1];
                itemValue = !!selectedFilters && selectedFilters[prefixKey] ? selectedFilters[prefixKey][itemKey] ?? null : null;
            }
        }
        return (<div className='row'>
                <div className='col-12'>
                    <span className={labelStyles?.filterLabel}>{item?.label}</span><br/>
                    {(item.values ?? []).map((value) => (
                        <FormControlLabel
                            control={<Checkbox key={value}
                                               checked={!!itemValue ? itemValue.includes(value) ?? false : false}
                                               onChange={(event, checked) => _onChangeMultipleFilter(key, value, checked)}/>}
                            label={value}/>
                    ))}
                </div>
            </div>
        );
    }

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

    const renderFilter = (key: string, filter: any, prefix_key?: string) => {
        if (!filter.type && !!filter.items) {
            return <div>
                {filter.label}
                {Object.keys(filter.items).map((itemKey) => renderFilter(itemKey, filter.items[itemKey], key))}
            </div>
        }
        const computedKey = !!prefix_key && prefix_key.trim().length > 0 ? `${prefix_key}.${key}` : key;
        const renderMethod = renderFilterMap[filter.type];
        return renderMethod(computedKey, filter);
    };


    return (<Card classes={classes}>
        <div className={filterStyle['filter-box']}>
            <div className='row'>
                <div className='col-9'>
                    <Typography variant='subtitle2' className={labelStyles?.headerLabel}>Filter</Typography>
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
                        <IconButton className={iconButtonClasses.root}
                                    onClick={() => resetFilters(false)}>
                            <IconClear/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Apply Filters'>
                        <IconButton className={iconButtonClasses.root}
                                    onClick={() => applyFilters(false)}>
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
