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

export function setMorphology(morphology) {
    return {
        type: hodgkinHuxleyConstants.SET_MORPHOLOGY,
        morphology
    }
}

export function setElectrophysiology(electrophysiology) {
    return {
        type: hodgkinHuxleyConstants.SET_ELECTROPHYSIOLOGY,
        electrophysiology
    }
}

export function clear() {
    return {
        type: hodgkinHuxleyConstants.CLEAR
    }
}