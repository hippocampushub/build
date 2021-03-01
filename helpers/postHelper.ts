import constants from '../constants';
import {MenuItemType} from "../data";


function getPageUrl(menuItem: any) {
    if (!menuItem) return '#';
    if (!menuItem.type) return '#';
    switch (menuItem.type) {
        case MenuItemType.url:
            return !!menuItem?.url ? `${constants.BASE_URL ?? ''}${menuItem.url}` : '/';
        case MenuItemType.section:
            return !!menuItem?.url ? `${constants.BASE_URL ?? ''}${menuItem.url}` : '#';
    }
}
export {
    getPageUrl
}
