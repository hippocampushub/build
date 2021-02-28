import {makeObservable, observable} from "mobx";
import {LocalStorageHelper} from "./helpers/storageHelper";

export class DataStore {
    // @ts-ignore
    @observable hhfcomm: any | undefined;

    constructor() {
        makeObservable(this);
    }

    hydrate(data: any) {
        this.hhfcomm = !!data.hhfcomm ? data.hhfcomm : {}
    }

    changeHHFComm(hhfcomm: any) {
        this.hhfcomm = !!hhfcomm ? hhfcomm : {};
        LocalStorageHelper.save('HHF-comm', hhfcomm);
    }
}