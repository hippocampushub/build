import {LocalStorageHelper} from "../helpers/storageHelper";
import {hashCode} from "../helpers/hashHelper";
import hodgkinHuxleyConstants from "../constants/hodgkinHuxley.constants";
import constants from "../constants";

const _storedHHFComm = LocalStorageHelper.get(constants.HHF_COMM);
const _defaultInitialState = !!_storedHHFComm ? {
    morphology: _storedHHFComm?.morphology ?? null,
    electrophysiologies: _storedHHFComm?.electrophysiologies ?? [],
    modFiles: _storedHHFComm?.mod_files ?? []
} : {
    morphology: null,
    electrophysiologies: [],
    modFiles: []
};

const _storeHHFComm = (data: any) => {
    if (!!data) {
        const newData: any = {};
        if (!!data?.morphology) {
            newData.morphology = data.morphology;
        }
        if (!!data?.electrophysiologies) {
            newData.electrophysiologies = data.electrophysiologies;
        }
        if (!!data.modFiles) {
            newData.mod_files = data.modFiles ?? [];
        }
        LocalStorageHelper.save(constants.HHF_COMM, newData);
    }
}

export function hodgkinHuxley(initialState: any = _defaultInitialState, action) {
    switch (action.type) {
        case hodgkinHuxleyConstants.SET_MORPHOLOGY: {
            const newState = {
                ...initialState ?? _defaultInitialState,
                type: action?.type,
                morphology: action?.morphology ?? null
            };
            _storeHHFComm(newState);
            return newState;
        }
        case hodgkinHuxleyConstants.ADD_ELECTROPHYSIOLOGY:
            const _electrophysiology = action?.electrophysiology ?? null;
            if (!!_electrophysiology) {
                const electrophysiologies = [...initialState?.electrophysiologies ?? []] ?? []
                const index = electrophysiologies?.findIndex((item) => hashCode(JSON.stringify(_electrophysiology)) === hashCode(JSON.stringify(item)));
                if (index === -1) {
                    electrophysiologies?.push(_electrophysiology);
                }
                const newState = {
                    ...initialState ?? _defaultInitialState,
                    type: action?.type,
                    electrophysiologies
                };
                _storeHHFComm(newState);
                return newState;
            }
            return {
                ...initialState
            }
        case hodgkinHuxleyConstants.REMOVE_ELECTROPHYSIOLOGY:
            const electrophysiology = action?.electrophysiology ?? null;
            if (!!electrophysiology) {
                const electrophysiologies = [...initialState?.electrophysiologies ?? []] ?? []
                const index = electrophysiologies?.findIndex((item) => hashCode(JSON.stringify(electrophysiology)) === hashCode(JSON.stringify(item)));
                if (index > -1) {
                    electrophysiologies?.splice(index, 1);
                }
                const newState = {
                    ...initialState ?? _defaultInitialState,
                    type: action?.type,
                    electrophysiologies
                }
                _storeHHFComm(newState);
                return newState;
            }
            return {
                ...initialState ?? _defaultInitialState
            }
        case hodgkinHuxleyConstants.ADD_MOD_FILE:
            const _modFile = action?.modFile ?? null;
            if (!!_modFile) {
                const modFiles = [...initialState?.modFiles ?? []] ?? []
                const index = modFiles?.findIndex((item) => hashCode(JSON.stringify(_modFile)) === hashCode(JSON.stringify(item)));
                if (index === -1) {
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