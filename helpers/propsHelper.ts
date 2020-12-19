import {getMenuItems, getConfig} from "./dataHelper";

export const defaultProps = {
    config: {},
    menuItems: []
}

function getConfigProps() {
    try {
        const config = getConfig();
        return config;
    } catch (error) {
        return {};
    }
}

function getMenuItemsProps() {
    try {
        const menuItems = getMenuItems();
        return menuItems;
    } catch (error) {
        return [];
    }
}

function getGlobalInitialProps() {
    try {
        const config = getConfigProps();
        const menuItems = getMenuItems();
        return {
            config,
            menuItems
        }
    } catch (error) {
        return {};
    }
}

export {
    getConfigProps,
    getMenuItemsProps,
    getGlobalInitialProps
}
