import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';

import { closeAll } from '../../service/db.ts';
import { init } from '../../service/setup.ts';

import { sentenceMock } from './mock.ts';
import { getAllByWordId, insert, remove } from './sentence.ts';

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
        const databaseSentences = getAllByWordId(word_id) ?? [];

        expect(databaseSentences.length).toEqual(sentences.length);
    });

    afterEach(() => {
        removeTestSentences();
        closeAll();
    });
});

function removeTestSentences(): void {
    const { word_id: testWordId } = sentenceMock.insertFull;
    const sentences = getAllByWordId(testWordId) ?? [];

    sentences.forEach((sentence) => {
        const { id } = sentence;

        if (!id) {
            return;
        }

        remove(id);
    });
}
