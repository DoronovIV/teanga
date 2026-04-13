import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';

import { config } from '../../config.ts';
import { errors } from '../../errors/errors.ts';
import { closeAll } from '../../service/db.ts';
import { init } from '../../service/setup.ts';

import { getAll, getById, insert, remove, update } from './language.ts';
import { languageMock } from './mock.ts';

const metaLanguage = {
    id: 1,
    iso_name: 'English',
};

describe('Language model', () => {
    beforeEach(() => {
        init();
    });

    test('Should return at least two seeded languages', () => {
        const languages = getAll();
        const english = languages.find((language) => {
            return language.iso_name === 'English';
        });
        const deutsch = languages.find((language) => {
            return language.iso_name === 'German';
        });
        const twoLanguagesExist = Boolean(english) && Boolean(deutsch);

        expect(twoLanguagesExist).toBe(true);
    });

    test('Should return meta language by id', () => {
        const { id, iso_name } = metaLanguage;
        const language = getById(id);

        expect(language?.iso_name).toBe(iso_name);
    });

    test('Should insert (and remove) a new language', () => {
        const testLanguage = languageMock.insert;
        const language = insert(testLanguage);

        remove(language?.id ?? -1);

        expect(testLanguage.iso_name).toBe(language?.iso_name);
    });

    test('Should insert (and remove) a new language with missing optional fields (partial)', () => {
        const testLanguage = languageMock.insertPartial;
        const language = insert(testLanguage);

        remove(language?.id ?? -1);

        expect(language?.iso_name).toBe(testLanguage.iso_name);
    });

    test('Should not insert a language with missing required fields (incomplete)', () => {
        const testLanguage = languageMock.insertIncomplete;

        expect(() => {
            insert(testLanguage);
        }).toThrow(errors.notNull);
    });

    test('Should update an existing language', () => {
        const testLanguage = languageMock.update;
        const id = insert(testLanguage)?.id ?? -1;
        const updatedLanguage = { ...testLanguage };
        const updatedIsoName = '__Updated Test';

        updatedLanguage.iso_name = updatedIsoName;

        const updatedLanguageInDb = update(id, updatedLanguage);

        expect(updatedLanguageInDb?.iso_name).toBe(updatedIsoName);

        remove(id);
    });

    afterEach(() => {
        removeTestLanguages();
        closeAll();
    });
});

function removeTestLanguages(): void {
    const ids = getAll()
        .filter((language) => {
            return language.iso_name.startsWith(config.disposableTestDataPrefix);
        })
        .map((language) => {
            return language.id;
        });

    ids.forEach((id) => {
        if (!id) {
            return;
        }

        remove(id);
    });
}
