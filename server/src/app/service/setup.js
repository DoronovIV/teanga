import Database from 'better-sqlite3';

import { config } from '../config.js';
import { insert } from '../models/language/language.js';
import { queries } from '../queries.js';

const languages = [
    {
        iso_name: 'English',
        set_1: 'en',
        set_2: 'eng',
        set_3: 'eng',
        scope: 'Individual',
        type: 'Living',
        endonyms: 'English',
    },
    {
        iso_name: 'German',
        set_1: 'de',
        set_2: 'deu',
        set_3: 'deu',
        scope: 'Individual',
        type: 'Living',
        endonyms: 'Deutsch',
    },
];

/**
 * Create language table and seed with initial data
 */
export function init() {
    const db = new Database(config.databases.dev.setup);

    db.exec(queries.languages.create);
    db.exec(queries.words.create);

    languages.forEach((language) => {
        insert(language);
    });

    db.close();
}
