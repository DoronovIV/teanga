import { afterEach, describe, expect, test } from '@jest/globals';

import { config } from '../../config.ts';
import { errors } from '../../errors/errors.ts';
import '../../service/setup.ts';
import { getAll as getAllLanguages } from '../language/language.ts';

import { Word } from '../../types/word.ts';
import { wordMock } from './mock.ts';
import { getAll, getAllByLanguageId, getById, insert, remove, update } from './word.ts';

describe('Word model', () => {
    test('Should return all words (w/o id)', () => {
        const { insert: insertWord, insertNull } = wordMock;
        const list = [insertWord, insertNull];

        list.forEach((word) => {
            insert(word);
        });

        const words = getAll();
        const PermanentTestWordCount = 1;

        expect(words?.length).toEqual(list.length + PermanentTestWordCount);
    });

    test('Should return all words by language id', () => {
        const { insert: insertWord, insertNull } = wordMock;
        const list = [insertWord, insertNull];

        const languageId = insertWord.language_id;
        const currentLength = getAllByLanguageId(languageId)?.length ?? 0;

        list.forEach((word) => {
            insert(word);
        });

        const { language_id } = insertWord;
        const words = getAllByLanguageId(language_id);

        expect(words?.length).toEqual(currentLength + list.length);
    });

    test('Should return a word by id', () => {
        const { insert: insertWord } = wordMock;
        const id = insert(insertWord)?.id ?? -1;
        const databaseWord = getById(id);

        expect(databaseWord?.forms).toEqual(insertWord.forms);
    });

    test('Should insert (and remove) a word', () => {
        const { insert: insertWord } = wordMock;
        const databaseWord = insert(insertWord);

        expect(databaseWord?.forms).toEqual(insertWord.forms);
    });

    test('Should fail to insert a word without language_id', () => {
        const { insert: insertWord } = wordMock;
        const invalidWord = { ...insertWord };

        invalidWord.language_id = null as unknown as number;

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
        }).toThrow(errors.foreignKey);
    });

    test('Should fail to insert duplicate entry', () => {
        const { insertDuplicate: insertDuplicateWord } = wordMock;

        insert(insertDuplicateWord);

        expect(() => {
            insert(insertDuplicateWord);
        }).toThrow(errors.unique);
    });

    test('Should update an existing word', () => {
        const { update: updateWord } = wordMock;
        const id = insert(updateWord)?.id ?? -1;
        const updatedForms = ['__UpdatedTest'];
        const updatedWord = { ...updateWord, forms: updatedForms };

        const databaseUpdatedWord = update(id, updatedWord);

        expect(databaseUpdatedWord?.forms).toEqual(updatedForms);
    });

    afterEach(() => {
        _removeTestWords();
    });
});

function _removeTestWords(): void {
    const languages = getAllLanguages();

    languages.forEach((language) => {
        const words = getAllByLanguageId(language?.id ?? -1) ?? [];

        const ids = words
            .filter((word: Word) => {
                return _isDisposableWord(word);
            })
            .map((word: Word) => {
                return word.id;
            });

        ids.forEach((id) => {
            if (!id) {
                return;
            }

            remove(id);
        });
    });
}

function _isDisposableWord(word: Word): boolean {
    return word.forms.some((form) => {
        return form.startsWith(config.disposableTestDataPrefix);
    });
}
