import {makeAutoObservable, makeObservable, observable} from "mobx";
import {LocalStorageHelper} from "./helpers/storageHelper";
import constants from "./constants";

export class DataStore {
    // @ts-ignore
    @observable hhfcomm: any | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    hydrate(data: any) {
        this.hhfcomm = !!data.hhfcomm ? data.hhfcomm : {}
    }

    changeHHFComm(hhfcomm: any) {
        this.hhfcomm = !!hhfcomm ? hhfcomm : {};
        LocalStorageHelper.save(constants.HHF_COMM, hhfcomm);
    }

    clear() {
        this.hhfcomm = null;
        LocalStorageHelper.delete(constants.HHF_COMM);
    }
}