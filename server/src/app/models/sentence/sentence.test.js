import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';

import { closeAll } from '../../service/db.js';
import { init } from '../../service/setup.js';

import { insert, getAllByWordId, remove } from './sentence.js';
import { sentenceMock } from './sentence.mock.js';

describe('Sentence model', () => {
    beforeEach(() => {
        init();
    });

    test('Should return all sentences by word id', () => {
        const { insertFull, insertPartial, insertNull } = sentenceMock;
        const sentences = [insertFull, insertPartial, insertNull];

        sentences.forEach((sentence) => {
            insert(sentence);
        });

        const { word_id } = insertFull;
        const databaseSentences = getAllByWordId(word_id);

        expect(databaseSentences.length).toEqual(sentences.length);
    });

    afterEach(() => {
        removeTestSentences();
        closeAll();
    });
});

function removeTestSentences() {
    const { word_id: testWordId } = sentenceMock.insertFull;
    const sentences = getAllByWordId(testWordId);

    sentences.forEach((sentence) => {
        remove(sentence.id);
    });
}
