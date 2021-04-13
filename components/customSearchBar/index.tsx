import * as React from "react";
import SearchBar, {SearchBarProps} from "material-ui-search-bar";
import {CustomButton} from "../buttons/buttons";
import {Search as IconSearch} from "@material-ui/icons";
import constants from "../../constants";

interface ICustomSearchBarProps extends SearchBarProps {}

export function CustomSearchBar(props: ICustomSearchBarProps) {
    const showButton = props?.value?.trim()?.length >= constants.MIN_SEARCH_LENGTH;
    const searchBarContainerClassName = showButton ? 'col-md-10 col-sm-12' : 'col-12';
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
            <div className='col-md-2 col-sm-12'>
                <CustomButton onClick={() => props?.onRequestSearch()} style={{fontSize: 16}}>
                    <IconSearch/>
                </CustomButton>
            </div> : null
        }
    </div>)
}