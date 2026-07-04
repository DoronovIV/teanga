import { afterEach, describe, expect, test } from '@jest/globals';

import '../../service/setup.ts';

import { config } from '../../config.ts';
import { sentenceMock } from './mock.ts';
import { getAll, getAllByWordId, insert, remove } from './sentence.ts';

describe('Sentence model', () => {
    test('Should return all sentences (w/o id)', () => {
        const { insertFull, insertPartial, insertNull } = sentenceMock;
        const sentences = [insertFull, insertPartial, insertNull];

        sentences.forEach((sentence) => {
            insert(sentence);
        });

        const databaseSentences = getAll() ?? [];
        const PermanentTestSentencesCount = 2;

        expect(databaseSentences.length).toEqual(sentences.length + PermanentTestSentencesCount);
    });

    test('Should return all sentences by word id', () => {
        const { insertFull, insertPartial, insertNull } = sentenceMock;
        const sentences = [insertFull, insertPartial, insertNull];

        sentences.forEach((sentence) => {
            insert(sentence);
        });

        const { word_id } = insertFull;
        const databaseSentences = getAllByWordId(word_id) ?? [];
        const PermanentTestSentencesCount = 2;

        expect(databaseSentences.length).toEqual(sentences.length + PermanentTestSentencesCount);
    });

    afterEach(() => {
        removeTestSentences();
    });
});

function removeTestSentences(): void {
    const sentences = getAll() ?? [];

    sentences.forEach((sentence) => {
        if (sentence.value.startsWith(config.reusableTestDataPrefix)) {
            return;
        }

        const { id } = sentence;

        if (!id) {
            return;
        }

        remove(id);
    });
}
