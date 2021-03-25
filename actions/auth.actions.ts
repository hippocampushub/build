import {login, verifyToken} from "../helpers/apiHelper";
import authConstants from "../constants/authConstants";

function _login(username: string, password: string) {
    function request() { return { type: authConstants.LOGIN_REQUEST } }
    function success() { return { type: authConstants.LOGIN_SUCCESS, isLogged: true } }
    function failure(error) { return { type: authConstants.LOGIN_ERROR, error, isLogged: false } }

    return async (dispatch) => {
        dispatch(request());
        const result = await login(username, password);
        if (result.success) {
            dispatch(success());
            return;
        }
        dispatch(failure(result.error));
    }

}

function _verifyToken(token: string) {
    function request() { return { type: authConstants.VERIFY_TOKEN_REQUEST } }
    function success() { return { type: authConstants.VERIFY_TOKEN_SUCCESS, isLogged: true } }
    function failure(error) { return { type: authConstants.VERIFY_TOKEN_ERROR, error, isLogged: false } }

    return async (dispatch) => {
        dispatch(request());
        const result = await verifyToken(token)
        if (result.success) {
            dispatch(success());
            return;
        }
        dispatch(failure(result.error));
    }
}

export {
    _login as login,
    _verifyToken as verifyToken
}