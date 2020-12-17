import {getMenuItems, getConfig} from "./apiHelper";

export const defaultProps = {
    config: {},
    menuItems: []
}

async function getConfigProps() {
    try {
        const config = await getConfig();
        return config;
    } catch (error) {
        return {};
    }
}

async function getMenuItemsProps() {
    try {
        const menuItems = await getMenuItems();
        return menuItems;
    } catch (error) {
        return [];
    }
}

async function getGlobalInitialProps() {
    try {
        const config = await getConfigProps();
        const menuItems = await getMenuItems();
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
