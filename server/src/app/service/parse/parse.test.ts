import { describe, expect, test } from '@jest/globals';

import { mock } from './mock.js';

import { parseFrom, parseTo } from './parse.js';

const { endonyms, otherNames, both, neither } = mock;

describe('Parse service', () => {
    test('Should parse language data object from app to db format', () => {
        const parsed = 'appLanguage';
        const target = 'dbLanguage';

        const parsedEndonyms = parseTo(endonyms[parsed]);
        const parsedOtherNames = parseTo(otherNames[parsed]);
        const parsedBoth = parseTo(both[parsed]);
        const parsedNeither = parseTo(neither[parsed]);

        expect(parsedEndonyms).toEqual(endonyms[target]);
        expect(parsedOtherNames).toEqual(otherNames[target]);
        expect(parsedBoth).toEqual(both[target]);
        expect(parsedNeither).toEqual(neither[target]);
    });

    test('Should parse language data object from db to app format', () => {
        const parsed = 'dbLanguage';
        const target = 'appLanguage';

        const parsedEndonyms = parseFrom(endonyms[parsed]);
        const parsedOtherNames = parseFrom(otherNames[parsed]);
        const parsedBoth = parseFrom(both[parsed]);
        const parsedNeither = parseFrom(neither[parsed]);

        expect(parsedEndonyms).toEqual(endonyms[target]);
        expect(parsedOtherNames).toEqual(otherNames[target]);
        expect(parsedBoth).toEqual(both[target]);
        expect(parsedNeither).toEqual(neither[target]);
    });
});
