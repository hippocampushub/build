import {action, makeAutoObservable, makeObservable, observable} from "mobx";
import {LocalStorageHelper} from "./helpers/storageHelper";
import constants from "./constants";
import {hashCode} from "./helpers/hashHelper";

export class DataStore {
    morphology: any | undefined = null;
    modFiles: any[] | undefined = [];

    constructor() {
        makeAutoObservable(this);
    }

    hydrate = (data: any) => {
        this.morphology = !!data.morphology ? data.morphology : null;
        this.modFiles = !!data.modFiles ? data.modFiles : [];
    }


    addModFile = (modFile: any) => {
        if (!!modFile) {
            const index = this.modFiles.findIndex((item) => hashCode(JSON.stringify(modFile)) === hashCode(JSON.stringify(item)));
            if (index == -1) {
                this.modFiles.push(modFile);
                this.__store__();
            }
        }
    }

    removeModFile = (modFile: any) => {
        if (!!modFile) {
            const index = this.modFiles.findIndex((item) => hashCode(JSON.stringify(modFile)) === hashCode(JSON.stringify(item)));
            if (index > -1) {
                this.modFiles.splice(index, 1);
                this.__store__();
            }
        }
    }

    setMorphology = (morphology: any) => {
        this.morphology = !!morphology ? {
            name: morphology?.name,
            url: morphology?.url
        } : null;
        this.__store__();
    }

    clear = () => {
        this.morphology = null;
        this.modFiles = [];
        LocalStorageHelper.delete(constants.HHF_COMM);
    }

    __store__ = () => {
        const hhfComm: any = {};
        if (!!this.morphology) {
            hhfComm.morphology = this.morphology;
        }
        if (!!this.modFiles) {
            hhfComm.modFiles = this.modFiles;
        }
        LocalStorageHelper.save(constants.HHF_COMM, hhfComm);
    }
}