import { Sentence } from '../../types/sentence.js';

/** Test word that will be preserved through tests */
const word_id = 1;

export const sentenceMock: {
    insertFull: Sentence;
    insertNull: Sentence;
    insertPartial: any;
    insertDuplicate: Sentence;
    update: Sentence;
} = {
    insertFull: {
        word_id,
        value: '__This is a sentence.',
        is_valid: false,
    },
    insertNull: {
        word_id,
        value: '__This is a sentence with null fields.',
        is_valid: false,
    },
    insertPartial: {
        word_id,
        value: '__This is a sentence with missing optional fields.',
        // is_valid: null,
    },
    insertDuplicate: {
        word_id,
        value: '__This is a sentence.',
        is_valid: false,
    },
    update: {
        word_id,
        value: '__This is an updated sentence.',
        is_valid: false,
    },
};
