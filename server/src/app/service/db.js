import Database from 'better-sqlite3';

import { config } from '../config.js';

export const dev = Object.freeze({
    setup: new Database(config.databases.dev.setup),
    test: new Database(config.databases.dev.test),
    main: new Database(config.databases.dev.main),
});

export function closeAll() {
    Object.values(dev).forEach((db) => {
        db.close();
    });
}
