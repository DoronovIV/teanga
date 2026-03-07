/** Test word that will be preserved through tests */
const word_id = 1;

export const sentenceMock = {
    insertFull: {
        word_id,
        created_at: Date.now(),
        value: '__This is a sentence.',
        is_validated: 0,
    },
    insertNull: {
        word_id,
        created_at: null,
        value: '__This is a sentence with null fields.',
        is_validated: null,
    },
    insertPartial: {
        word_id,
        // created_at: null,
        value: '__This is a sentence with missing optional fields.',
        // is_validated: null,
    },
    insertDuplicate: {
        word_id,
        value: '__This is a sentence.',
    },
    update: {
        word_id,
        created_at: Date.now(),
        value: '__This is an updated sentence.',
        is_validated: 1,
    },
};
