import SearchBar, {SearchBarProps} from "material-ui-search-bar";
import * as React from "react";
import {CustomButton} from "../buttons/buttons";
import constants from "../../constants";

interface ICustomSearchBarProps extends SearchBarProps {}

export function CustomSearchBar(props: ICustomSearchBarProps) {
    const showButton = props?.value?.trim()?.length >= constants.MIN_SEARCH_LENGTH;
    const searchBarContainerClassName = showButton ? 'col-9' : 'col-12';
    return (<div className='row'>
        <div className={searchBarContainerClassName}>
            <SearchBar
                value={props?.value}
                onChange={props?.onChange}
                onRequestSearch={props?.onRequestSearch}
                onCancelSearch={() => props?.onChange('')}>
            </SearchBar>
        </div>
        {showButton ?
            <div className='col-3'>
                <CustomButton onClick={() => props?.onRequestSearch()} style={{fontSize: 16}}>
                    Search
                </CustomButton>
            </div> : null
        }
    </div>)
}