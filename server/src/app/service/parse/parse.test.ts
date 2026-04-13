import { describe, expect, test } from '@jest/globals';

import { mock } from './mock.ts';

import { parseFrom as parseLanguageFrom, parseTo as parseLanguageTo } from './language.ts';

const { endonyms, otherNames, both, neither } = mock;

describe('Parse service', () => {
    test('Should parse language data object from app to db format', () => {
        const parsed = 'appLanguage';
        const target = 'dbLanguage';

        const parsedEndonyms = parseLanguageTo(endonyms[parsed]);
        const parsedOtherNames = parseLanguageTo(otherNames[parsed]);
        const parsedBoth = parseLanguageTo(both[parsed]);
        const parsedNeither = parseLanguageTo(neither[parsed]);

        expect(parsedEndonyms).toEqual(endonyms[target]);
        expect(parsedOtherNames).toEqual(otherNames[target]);
        expect(parsedBoth).toEqual(both[target]);
        expect(parsedNeither).toEqual(neither[target]);
    });

    test('Should parse language data object from db to app format', () => {
        const parsed = 'dbLanguage';
        const target = 'appLanguage';

        const parsedEndonyms = parseLanguageFrom(endonyms[parsed]);
        const parsedOtherNames = parseLanguageFrom(otherNames[parsed]);
        const parsedBoth = parseLanguageFrom(both[parsed]);
        const parsedNeither = parseLanguageFrom(neither[parsed]);

        expect(parsedEndonyms).toEqual(endonyms[target]);
        expect(parsedOtherNames).toEqual(otherNames[target]);
        expect(parsedBoth).toEqual(both[target]);
        expect(parsedNeither).toEqual(neither[target]);
    });
});
