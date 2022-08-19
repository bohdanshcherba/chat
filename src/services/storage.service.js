

class Storage{
    constructor() {
        this.storage = window.localStorage

    }

    getItem(key){

        return JSON.parse(this.storage.getItem(key));
    }

    setItem(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    removeItem(key) {
        this.storage.removeItem(key);
    }

}

export { Storage }
