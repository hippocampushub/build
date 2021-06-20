import hodgkinHuxleyConstants from "../constants/hodgkinHuxley.constants";

export function addModFile(modFile) {
    return {
        type: hodgkinHuxleyConstants.ADD_MOD_FILE,
        modFile
    }
}

export function removeModFile(modFile) {
    return {
        type: hodgkinHuxleyConstants.REMOVE_MOD_FILE,
        modFile
    }
}

export function addElectrophysiology(electrophysiology) {
    return {
        type: hodgkinHuxleyConstants.ADD_ELECTROPHYSIOLOGY,
        electrophysiology
    }
}

export function removeElectrophysiology(electrophysiology) {
    return {
        type: hodgkinHuxleyConstants.REMOVE_ELECTROPHYSIOLOGY,
        electrophysiology
    }
}

export function setMorphology(morphology) {
    return {
        type: hodgkinHuxleyConstants.SET_MORPHOLOGY,
        morphology
    }
}

export function clear() {
    return {
        type: hodgkinHuxleyConstants.CLEAR
    }
}