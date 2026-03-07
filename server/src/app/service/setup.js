import { insert as insertLanguage } from '../models/language/language.js';
import { insert as insertWord } from '../models/word/word.js';
import { schema } from '../schema.js';

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

const word = {
    language_id: 1,
    value: '##Test',
};

/** Create language table and seed with initial data */
export function init() {
    db.exec(schema.languages.create);
    db.exec(schema.words.create);
    db.exec(schema.sentences.create);

    languages.forEach((language) => {
        try {
            insertLanguage(language);
        } catch (error) {
            /** ignore unique error in testing */
            if (error.code.startsWith(schema.errors.unique)) {
                return;
            }
        }
    });

    try {
        insertWord(word);
    } catch (error) {
        /** ignore unique error in testing */
        if (error.code.startsWith(schema.errors.unique)) {
            return;
        }
    }

    closeAll();
}
