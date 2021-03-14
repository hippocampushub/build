import tosConstants from "../constants/tos.constants";
import {LocalStorageHelper} from "../helpers/storageHelper";
import constants from "../constants";

const _storedTOS = LocalStorageHelper.get(constants.HFH_TOS);
const _defaultInitialState = {
    agree: _storedTOS?.agree ?? false
};

const _storeTOS = (data) => {
    if (!!data) {
        const newData: any = {
            agree: false
        };
        if (!!data.agree) {
            newData.agree = data.agree;
        }
        LocalStorageHelper.save(constants.HFH_TOS, newData);
    }
}

export function tos(initialState: any = _defaultInitialState, action) {
    switch (action.type) {
        case tosConstants.AGREE_TOS:
            const newData = {
                ...initialState,
                action: action.type,
                agree: true
            }
            _storeTOS(newData);
            return newData;
        default:
            return initialState;
    }
}