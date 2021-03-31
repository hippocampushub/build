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
import constants from "../../constants";


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
    }
}));

const useLabelStyles = makeStyles((theme) => ({
    headerLabel: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'capitalize'
    },
    rootFilterLabel: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'capitalize'
    },
    filterLabel: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: 11,
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
    variant?: string;
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
    resetFilters,
    variant
}: {
    filters: any;
    selectedFilters: any;
    onChangeFilters: (key: string, value: any) => void;
    closeFilters: () => void;
    applyFilters: () => void;
    resetFilters: (close: boolean) => void;
    variant?: string;
}) {
    const classes = useStyles();

    const iconButtonClasses = useIconStyles();
    const labelStyles = useLabelStyles();
    const suggestionFilters = !!filters ? Object.keys(filters).map((key) => filters[key]) : [];
    const [suggestionValue, setSuggestionValue] = React.useState(suggestionFilters.reduce((acc, item) => acc = {
        ...acc,
        [item.key]: ''
    }, {}));

    const _onChangeMultipleFilter = (key: string, value: any, checked: boolean) => {
        let newFilters = [];
        if (!!key) {
            if (key.split('.').length === 1) {
                newFilters = !!selectedFilters && !!selectedFilters[key] ? [...selectedFilters[key]] : [];
            } else {
                const prefixKey = key.split('.')[0];
                const itemKey = key.split('.')[1];
                newFilters = !!selectedFilters && !!selectedFilters[prefixKey] &&
                !!selectedFilters[prefixKey][itemKey] ? [...selectedFilters[prefixKey][itemKey]] : [];
            }
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
    }

    const _onChangeSuggestionValue = (key: string, text: string) => {
        setSuggestionValue({
            ...suggestionValue,
            [key]: text
        });
    }


    const renderMultipleFilter = (key: string, item: any, values: any[]) => {
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
        const filterValues = !!values ? values : item.values ?? [];
        const hasSuggestionFilter = !!suggestionValue[key] && suggestionValue[key].trim().length >= constants.SUGGESTION_MIN_LENGTH;
        const suggestionsItems = hasSuggestionFilter ? suggestionValue[key].split(';') : [];
        const filteredItems = hasSuggestionFilter ? (filterValues.filter((item) => suggestionsItems.map((suggest) => item.toLowerCase().includes(suggest)).reduce((a, b) => a || b, false)) ?? []) : filterValues;
        const hasItems = !!filteredItems && filteredItems.length > 0;
        return (<div className='row'>
                <div className='col-12'>
                    <TextField
                        fullWidth={true}
                        key={`suggestion-${key}`}
                        value={suggestionValue[key]}
                        label={item?.label}
                        onChange={(event) => _onChangeSuggestionValue(key, event.target.value)}
                    />
                </div>
                {hasItems ?
                    <div className='col-12'>
                        <span className={labelStyles?.filterLabel}>{item?.label}</span><br/>
                        {(filteredItems ?? []).map((value) => (
                            <FormControlLabel
                                control={<Checkbox key={value}
                                                   checked={!!itemValue ? itemValue.includes(value) ?? false : false}
                                                   onChange={(event, checked) => _onChangeMultipleFilter(key, value, checked)}/>}
                                label={value}/>
                        ))}
                    </div> : null
                }
            </div>
        );
    }

    const renderSuggestionFilter = (key: string, item: any) => {

    };

    const renderFilterMap = {
        'multiple': renderMultipleFilter,
        'suggestion': renderSuggestionFilter
    };

    const renderFilter = (key: string, filter: any, prefix_key?: string) => {
        if (!filter.type && !!filter.items) {
            const filterKeys = !!filters ? Object.keys(filter.items) : [];
            const sortedFilterKeys = filterKeys?.map((itemKey) => ({
                ...filter.items[itemKey],
                'root_key': itemKey
            })).sort((item1, item2) => item1['order'] - (item2['order']))
                .map((item) => item['root_key']);
            return <div>
                <span className={labelStyles?.rootFilterLabel}>{filter?.label}</span><br/>
                {sortedFilterKeys.map((itemKey) => renderFilter(itemKey, filter.items[itemKey], key))}
            </div>
        }
        let values = null;
        if (!!filter.depends_on && filter.depends_on.length > 0) {
            const items = []
            for (let dependency of filter.depends_on) {
                const dependencyPrefixKey = dependency.split('.')[0];
                const dependencyKey = dependency.split('.').length > 1 ? dependency.split('.')[1] : dependency.split('.')[0];
                if (dependencyPrefixKey !== dependencyKey) {
                    const filterValues = !!selectedFilters && !!selectedFilters[dependencyPrefixKey] ? selectedFilters[dependencyPrefixKey][dependencyKey] ?? [] : [];
                    const _items = filter?.values?.filter((item) => filterValues.includes(item.split(':')[0].trim()));
                    items.push(..._items)
                } else {
                    const filterValues = !!selectedFilters ? selectedFilters[dependencyKey] ?? [] : [];
                    const _items = filter?.values?.filter((item) => filterValues.includes(item.split(':')[0].trim()));
                    items.push(..._items)
                }
            }
            values = items;
            if (items.length === 0) {
                values = filter.values;
            }
        }
        if (!!filter.values && filter.values.length > 0) {
            const computedKey = !!prefix_key && prefix_key.trim().length > 0 ? `${prefix_key}.${key}` : key;
            const renderMethod = renderFilterMap[filter.type];
            return renderMethod(computedKey, filter, values);
        }
        return <div></div>
    };

    const filterKeys = !!filters ? Object.keys(filters) : [];
    const sortedFilterKeys = filterKeys?.map((key) => ({
            ...filters[key],
            'root_key': key
    })).sort((item1, item2) => item1['order'] - (item2['order']))
        .map((item) => item['root_key']);

    return (<Card classes={classes}>
        <div className={`${filterStyle['filter-box']} ${!!variant ? filterStyle[variant] : ''}`}>
            <div className='row'>
                <div className='col-9'>
                    <Typography variant='subtitle2' className={labelStyles?.headerLabel}>Filter</Typography>
                </div>
                <div className='col-3 text-right'>
                    <IconButton
                        className={iconButtonClasses.root}
                        onClick={() => closeFilters()}>
                        <IconClose htmlColor={variant === 'dark' ? '#fff' : null}/>
                    </IconButton>
                </div>
            </div>
            {sortedFilterKeys.map((key) => {
                const item = filters[key];
                return renderFilter(key, item);
            })}

            <div className='row' style={{marginTop: 10}}>
                <div className='col-12 text-center'>
                    <Tooltip title='Reset Filters'>
                        <IconButton className={iconButtonClasses.root}
                                    onClick={() => resetFilters(false)}>
                            <IconClear htmlColor={variant === 'dark' ? '#fff': null}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Apply Filters'>
                        <IconButton className={iconButtonClasses.root}
                                    onClick={() => applyFilters()}>
                            <IconCheck htmlColor={variant === 'dark' ? '#fff': null}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    </Card>);
}

export function FormFilter({
    variant,
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

    const _applyFilters = () => {
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
            <div className='col-md-9 col-sm-12'>
                <SearchBar
                    value={query}
                    onChange={onQueryChange}
                    onRequestSearch={onRequestSearch}
                    onCancelSearch={() => onQueryChange('')}
                />
            </div>
            <div className='col-md-3 col-sm-12 text-right'>
                <div className='row'>
                    <div className='col-8'>
                        <FormControl style={{minWidth: '100%'}}>
                            <InputLabel style={{color: '#fff'}}>Hits per page</InputLabel>
                            <Select
                                style={{
                                    color: variant === 'dark' ? '#fff' : '#000'
                                }}
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
                                <IconFilter htmlColor={variant === 'dark' ? '#fff' : null}/>
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
                        variant={variant}
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
