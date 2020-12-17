import { gql, useQuery } from "@apollo/client";
const getGraphMenuItems = () => {
    const GET_MENU_ITEMS_QUERY = gql`
        query allMenuItems {
            query menuitems {
                title,
                type,
                parent {
                    title
                }
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_MENU_ITEMS_QUERY);
    console.log('@@@@@@@loading', loading);
    console.log('@@@@@@@error', error);
    console.log('@@@@@@@data', data);
    if (!loading && !error) {
        return data.menuitems;
    }
    return [];
}

export {
    getGraphMenuItems
}
