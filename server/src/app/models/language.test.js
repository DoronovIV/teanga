import { afterAll, describe, expect, test } from '@jest/globals';

import { closeAll } from '../service/db.js';

import { getAll, getById } from './language.js';

const languagesLength = 2;

const metaLanguage = {
    id: 1,
    iso_name: 'English',
};

describe('Language Model', () => {
    test(`Should return ${languagesLength} languages`, () => {
        const languages = getAll();

        expect(languages.length).toBe(languagesLength);
    });

    test('Should return meta language by id', () => {
        const { id, iso_name } = metaLanguage;
        const language = getById(id);

        expect(language.iso_name).toBe(iso_name);
    });

    afterAll(() => {
        closeAll();
    });
});
