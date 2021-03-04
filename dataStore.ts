import {observable} from "mobx";
import {LocalStorageHelper} from "./helpers/storageHelper";
import constants from "./constants";
import {hashCode} from "./helpers/hashHelper";

export class DataStore {
    @observable morphology: any | undefined = null;
    @observable modFiles: any[] | undefined = [];


    hydrate = (data: any) => {
        this.morphology = !!data.morphology ? data.morphology : null;
        this.modFiles = !!data.modFiles ? data.modFiles : [];
    }


    addModFile = (modFile: any) => {
        if (!!modFile) {
            const modFiles = [...this.modFiles];
            const index = modFiles.findIndex((item) => hashCode(JSON.stringify(modFile)) === hashCode(JSON.stringify(item)));
            if (index == -1) {
                modFiles.push(modFile);
                this.modFiles = modFiles;
                this.__store__();
            }
        }
    }

    removeModFile = (modFile: any) => {
        if (!!modFile) {
            const modFiles = [...this.modFiles];
            const index = modFiles.findIndex((item) => hashCode(JSON.stringify(modFile)) === hashCode(JSON.stringify(item)));
            if (index > -1) {
                modFiles.splice(index, 1);
                this.modFiles = modFiles;
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
            hhfComm.mod_files = this.modFiles;
        }
        LocalStorageHelper.save(constants.HHF_COMM, hhfComm);
    }
}