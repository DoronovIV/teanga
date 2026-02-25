import { insert } from '../models/language/language.js';
import { sql } from '../sql.js';

import { dev, closeAll } from './db.js';

const db = dev().setup;

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
    db.exec(sql.languages.create);
    db.exec(sql.words.create);
    db.exec(sql.sentences.create);

    languages.forEach((language) => {
        try {
            insert(language);
        } catch (error) {
            /** ignore unique error in testing */
            if (error.code.startsWith(sql.errors.unique)) {
                return;
            }
        }
    });

    closeAll();
}
