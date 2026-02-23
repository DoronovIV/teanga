import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';

import { closeAll } from '../../service/db.js';
import { init } from '../../service/setup.js';
import { sql } from '../../sql.js';
import { getAll as getAllLanguages } from '../language/language.js';

import { insert, getAllByLanguageId, remove, getById } from './word.js';
import { wordMock } from './word.mock.js';

describe('Word model', () => {
    beforeEach(() => {
        init();
    });

    test('Should return all words by language id', () => {
        const { insert: insertWord, insertNull, insertPartial } = wordMock;
        const list = [insertWord, insertNull, insertPartial];

        list.forEach((word) => {
            insert(word);
        });

        const { language_id } = insertWord;
        const words = getAllByLanguageId(language_id);

        expect(words.length).toEqual(list.length);

        words.forEach((word) => {
            remove(word.id);
        });
    });

    test('Should return a word by id', () => {
        const { insert: insertWord } = wordMock;
        const { id } = insert(insertWord);
        const databaseWord = getById(id);

        expect(databaseWord.value).toEqual(insertWord.value);
    });

    test('Should insert (and remove) a word', () => {
        const { insert: insertWord } = wordMock;

        const databaseWord = insert(insertWord);

        expect(databaseWord.value).toEqual(insertWord.value);

        remove(databaseWord.id);
    });

    test('Should insert (and remove) a word with optional fields defined as null (null)', () => {
        const { insertNull: insertNullWord } = wordMock;

        const databaseWord = insert(insertNullWord);

        expect(databaseWord.value).toEqual(insertNullWord.value);

        remove(databaseWord.id);
    });

    test('Should insert (and remove) a word with missing optional fields (partial)', () => {
        const { insertPartial: insertPartialWord } = wordMock;

        const databaseWord = insert(insertPartialWord);

        expect(databaseWord.value).toEqual(insertPartialWord.value);

        remove(databaseWord.id);
    });

    test('Should fail to insert a word without language_id', () => {
        const { insert: insertWord } = wordMock;
        const invalidWord = { ...insertWord };

        delete invalidWord.language_id;

        const errorMessage = 'NOT NULL constraint failed: words.language_id';

        expect(() => {
            insert(invalidWord);
        }).toThrow(errorMessage);
    });

    test('Should fail to insert a word with unrealistic language_id', () => {
        const { insert: insertWord } = wordMock;
        const invalidWord = { ...insertWord };

        invalidWord.language_id = Number.MAX_SAFE_INTEGER;

        expect(() => {
            insert(invalidWord);
        }).toThrow(sql.errors.foreignKey);
    });

    afterEach(() => {
        removeTestWords();
        closeAll();
    });
});

function removeTestWords() {
    const languages = getAllLanguages();

    languages.forEach((language) => {
        const ids = getAllByLanguageId(language.id)
            .filter((word) => {
                return word.value.startsWith('__');
            })
            .map((word) => {
                return word.id;
            });

        ids.forEach((id) => {
            remove(id);
        });
    });
}
