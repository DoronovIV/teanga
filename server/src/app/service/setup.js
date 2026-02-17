import Database from 'better-sqlite3';

import { config } from '../config.js';
import { queries } from '../queries.js';

const data = [
    {
        iso_name: 'English',
        set_1: 'en',
        set_2: 'eng',
        set_3: 'eng',
        scope: 'Individual',
        type: 'Living',
        endonyms: 'English',
        other_names: null,
        notes: null,
    },
    {
        iso_name: 'German',
        set_1: 'de',
        set_2: 'deu',
        set_3: 'deu',
        scope: 'Individual',
        type: 'Living',
        endonyms: 'Deutsch',
        other_names: null,
        notes: null,
    },
];

/**
 * Create language table and seed with initial data
 */
export function init() {
    const db = new Database(config.databases.dev.setup);

    db.exec(queries.languages.create);
    seed(db);
    db.close();
}

function seed(db) {
    const insert = db.prepare(queries.languages.insert);

    data.forEach((language) => {
        insert.run(Object.values(language));
    });
}
