import constants from "../constants";
import {MenuItemType} from "../data";


function getPostUrl(menuItem: any) {
    if (!menuItem) return '#';
    if (!menuItem.type) return '#';
    switch (menuItem.type) {
        case MenuItemType.link:
            return menuItem.url ?? '/';
        case MenuItemType.post:
            return `/post/${menuItem.post}`;
        case MenuItemType.section:
            return '#';
    }
}
export {
    getPostUrl
}
