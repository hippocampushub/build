import {LocalStorageHelper} from "../helpers/storageHelper";
import {hashCode} from "../helpers/hashHelper";
import hodgkinHuxleyConstants from "../constants/hodgkinHuxley.constants";
import constants from "../constants";

const _storedHHFComm = LocalStorageHelper.get(constants.HHF_COMM);
const _defaultInitialState = !!_storedHHFComm ? {
    morphology: _storedHHFComm?.morphology ?? null,
    modFiles: _storedHHFComm?.mod_files ?? []
} : {
    morphology: null,
    modFiles: []
};

const _storeHHFComm = (data: any) => {
    if (!!data) {
        const newData: any = {};
        if (!!data?.morphology) {
            newData.morphology = data.morphology;
        }
        if (!!data.modFiles) {
            newData.mod_files = data.modFiles ?? [];
        }
        LocalStorageHelper.save(constants.HHF_COMM, newData);
    }
}

export function hodgkinHuxley(initialState: any = _defaultInitialState, action) {
    switch (action.type) {
        case hodgkinHuxleyConstants.SET_MORPHOLOGY:
            const newState = {
                ...initialState ?? _defaultInitialState,
                type: action?.type,
                morphology: action.morphology
            };
            _storeHHFComm(newState);
            return newState;
        case hodgkinHuxleyConstants.ADD_MOD_FILE:
            const _modFile = action?.modFile ?? null;
            if (!!_modFile) {
                const modFiles = [...initialState?.modFiles ?? []] ?? []
                const index = modFiles?.findIndex((item) => hashCode(JSON.stringify(_modFile)) === hashCode(JSON.stringify(item)));
                if (index == -1) {
                    modFiles?.push(_modFile);
                }
                const newState = {
                    ...initialState ?? _defaultInitialState,
                    type: action?.type,
                    modFiles: modFiles
                }
                _storeHHFComm(newState);
                return newState;
            }
            return {
                ...initialState
            }
        case hodgkinHuxleyConstants.REMOVE_MOD_FILE:
            const modFile = action?.modFile ?? null;
            if (!!modFile) {
                const modFiles = [...initialState?.modFiles ?? []] ?? []
                const index = modFiles?.findIndex((item) => hashCode(JSON.stringify(modFile)) === hashCode(JSON.stringify(item)));
                if (index > -1) {
                    modFiles?.splice(index, 1);
                }
                const newState = {
                    ...initialState ?? _defaultInitialState,
                    type: action?.type,
                    modFiles: modFiles
                }
                _storeHHFComm(newState);
                return newState;
            }
            return {
                ...initialState ?? _defaultInitialState
            }
        case hodgkinHuxleyConstants.CLEAR:
            LocalStorageHelper.delete(constants.HHF_COMM);
            return {
                type: action?.type,
                morphology: null,
                modFiles: []
            }
        default:
            return _defaultInitialState;
    }
}