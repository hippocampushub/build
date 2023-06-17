import authConstants from "../constants/auth.constants";

export function auth(initialState: any = {}, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...initialState,
                ...action,
                error: null
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...initialState,
                ...action,
                error: null
            };
        case authConstants.LOGIN_ERROR:
            return {
                ...initialState,
                ...action
            };
        case authConstants.VERIFY_TOKEN_REQUEST:
            return {
                ...initialState,
                ...action,
                error: null
            };
        case authConstants.VERIFY_TOKEN_SUCCESS:
            return {
                ...initialState,
                ...action,
                error: null
            };
        case authConstants.VERIFY_TOKEN_ERROR:
            return {
                ...initialState,
                ...action
            };
        default:
            return {
                ...initialState
            }
    }
}