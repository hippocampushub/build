import * as React from 'react';
import SearchBar from 'material-ui-search-bar';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";
import {MenuItem, Select} from "@material-ui/core";

import filterStyle from './filter.module.scss';

export interface IFormFilterProps extends DefaultComponentProps<any>{
    regions?: any[],
    query?: string,
    onQueryChange?: (value: string) => void,
    onRequestSearch?: () => void
}

export function FormFilter({regions, query, onQueryChange, onRequestSearch}: IFormFilterProps) {
    const regionItems = (regions ?? []).map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>);
    const [selectedRegion, setSelectedRegion] = React.useState('');
    return (<div>
        <div className='row'>
            <div className='col-8'>
                <SearchBar
                    value={query}
                    onChange={onQueryChange}
                    onRequestSearch={onRequestSearch}
                />
            </div>
            <div className='col-4'>
                <Select className={filterStyle['select-box']}
                    value={selectedRegion}
                    onChange={(event) => setSelectedRegion(event.target.value as string ?? '')}>
                    {regionItems}
                </Select>
            </div>
        </div>
    </div>);
}
