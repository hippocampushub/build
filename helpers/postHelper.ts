import {MenuItemType} from "../data";


function getPageUrl(menuItem: any) {
    if (!menuItem) return '#';
    if (!menuItem.type) return '#';
    switch (menuItem.type) {
        case MenuItemType.link:
            return menuItem.url ?? '/';
        case MenuItemType.page:
            return `/${menuItem.page}`;
        case MenuItemType.section:
            return '#';
    }
}
export {
    getPageUrl
}
