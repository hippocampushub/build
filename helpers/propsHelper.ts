import {getMenuItems} from "./apiHelper";

async function getMenuItemsProps() {
    try {
        const menuItems = await getMenuItems();
        return menuItems;
    } catch (error) {
        return [];
    }
}

export {
    getMenuItemsProps
}
