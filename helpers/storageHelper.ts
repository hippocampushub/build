abstract class StorageHelper {
    static _storage;
    static save(key: string, value: any) {
        this._storage?.setItem(key, value);
    }
    static get(key: string) {
        return this._storage?.getItem(key);
    }
    static delete(key: string) {
        return this._storage?.removeItem(key);
    }
}

class LocalStorageHelper extends StorageHelper {
    static _storage = typeof window !== 'undefined' ? window?.localStorage ?? null : null;
    static save(key: string, value: any) {
        if (!!value) {
            super.save(key, JSON.stringify(value));
        }
    }
    static get(key: string) {
        const retrievedValue = super.get(key);
        if (!!retrievedValue) {
            return JSON.parse(retrievedValue);
        }
        return null;
    }
    static delete(key: string) {
        return super.delete(key);
    }
}


export {
    LocalStorageHelper
}