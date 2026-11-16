import { errors } from '../errors/errors.js';
import { insert as insertLanguage } from '../models/language/language.js';
import { insert as insertSentence } from '../models/sentence/sentence.js';
import { insert as insertWord } from '../models/word/word.js';
import { schema } from '../schema.js';
import { Language } from '../types/language.js';
import { Sentence } from '../types/sentence.js';
import { Word } from '../types/word.js';

import { closeAll, dev } from './db.js';

const db = dev();

const languages: Language[] = [
    {
        iso_name: 'English',
        set_1: 'en',
        set_2: 'eng',
        set_3: 'eng',
        scope: 'Individual',
        type: 'Living',
        endonyms: ['English'],
        other_names: [''],
        notes: [''],
    },
    {
        iso_name: 'German',
        set_1: 'de',
        set_2: 'deu',
        set_3: 'deu',
        scope: 'Individual',
        type: 'Living',
        endonyms: ['Deutsch'],
        other_names: [''],
        notes: [''],
    },
];

const testWord: Word = {
    language_id: 1,
    forms: ['##Test'],
    translations: [''],
    definitions: [''],
    classes: [''],
    is_formal: false,
    wasted: false,
    lemmas: [''],
    synonyms: [''],
    antonyms: [''],
};

const testSentence: Sentence = {
    word_id: 1,
    value: '##Test sentence.',
    is_valid: true,
    wasted: false,
};

const testSentence1: Sentence = {
    word_id: 1,
    value: '##Test sentence one.',
    is_valid: true,
    wasted: false,
};

db().exec(schema.languages.create);
db().exec(schema.words.create);
db().exec(schema.sentences.create);

_seed();

/** Seed tables with initial data */
function _seed(): void {
    languages.forEach((language) => {
        try {
            insertLanguage(language);
        } catch (error: any) {
            /** ignore unique error in testing */
            if (error.code?.startsWith(errors.unique)) {
                return;
            }
        }
    });

    try {
        insertWord(testWord);
    } catch (error: any) {
        /** ignore unique error in testing */
        if (error.code?.startsWith(errors.unique)) {
            closeAll();
        }
    }

    try {
        insertSentence(testSentence);
    } catch (error: any) {
        /** ignore unique error in testing */
        if (error.code?.startsWith(errors.unique)) {
            closeAll();
        }
    }

    try {
        insertSentence(testSentence1);
    } catch (error: any) {
        /** ignore unique error in testing */
        if (error.code?.startsWith(errors.unique)) {
            closeAll();
        }
    }

    closeAll();
}
