import { describe, expect, test } from '@jest/globals';

import { mock } from './mock.js';
import { parseLanguage } from './parse.js';

const { endonyms, otherNames, both, neither } = mock;

describe('Parse service', () => {
    test('Should parse language data object from app to db format', () => {
        const parsed = 'appLanguage';
        const target = 'dbLanguage';

        runLanguageParseTest(parsed, target);
    });

    test('Should parse language data object from db to app format', () => {
        const parsed = 'dbLanguage';
        const target = 'appLanguage';

        runLanguageParseTest(parsed, target);
    });
});

function runLanguageParseTest(parsed, target) {
    const parsedEndonyms = parseLanguage(endonyms[parsed]);
    const parsedOtherNames = parseLanguage(otherNames[parsed]);
    const parsedBoth = parseLanguage(both[parsed]);
    const parsedNeither = parseLanguage(neither[parsed]);

    expect(parsedEndonyms).toEqual(endonyms[target]);
    expect(parsedOtherNames).toEqual(otherNames[target]);
    expect(parsedBoth).toEqual(both[target]);
    expect(parsedNeither).toEqual(neither[target]);
}
