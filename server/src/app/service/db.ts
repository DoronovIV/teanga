import Database from 'better-sqlite3';

import { config } from '../config.js';

let _dev: { test: Database.Database; main: Database.Database } | null = null;

export function closeAll(): void {
    Object.values(dev).forEach((db) => {
        db.close();
    });
}

export function dev(): { test: Database.Database; main: Database.Database } {
    const isOpen =
        _dev &&
        Object.values(_dev).some((db) => {
            return db.open;
        });

    if (!isOpen || !_dev) {
        _dev = Object.freeze({
            test: new Database(config.databases.dev.test),
            main: new Database(config.databases.dev.main),
        });
    }

    return _dev;
}
