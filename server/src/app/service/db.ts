import Database from 'better-sqlite3';

import { config } from '../config.js';

export let _dev = Object.freeze(new Database(config.databases.dev));

export function dev(): () => Database.Database {
    return () => {
        if (!_dev.open) {
            _dev = Object.freeze(new Database(config.databases.dev));
        }

        return _dev;
    };
}

export function closeAll(): void {
    if (!_dev.open) {
        return;
    }

    _dev.close();
}
