import {getCookie} from "./cookieHelper";
import constants from "../constants";

const getAuthToken = () => {
    return getCookie(constants.AUTH_COOKIE_KEY);
}

export {
    getAuthToken
}