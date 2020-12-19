import {MenuItemType} from "../data";


function getPageUrl(menuItem: any) {
    if (!menuItem) return '#';
    if (!menuItem.type) return '#';
    switch (menuItem.type) {
        case MenuItemType.url:
            return menuItem.url ?? '/';
        case MenuItemType.section:
            return '#';
    }
}
export {
    getPageUrl
}
