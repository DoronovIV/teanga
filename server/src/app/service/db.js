import Database from 'better-sqlite3';

import { config } from '../config.js';

let _dev = null;

export function closeAll() {
    Object.values(dev).forEach((db) => {
        db.close();
    });
}

export function dev() {
    const isOpen =
        _dev &&
        Object.values(_dev).some((db) => {
            return db.open;
        });

    if (!isOpen) {
        _dev = Object.freeze({
            setup: new Database(config.databases.dev.setup),
            test: new Database(config.databases.dev.test),
            main: new Database(config.databases.dev.main),
        });
    }

    return _dev;
}
