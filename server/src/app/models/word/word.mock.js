export const wordMock = {
    insert: {
        language_id: 1,
        created_at: Date.now(),
        value: '__TestInsert',
        translations: '__TestInsert',
        definition:
            'A test word that is used for testing purposes in the development process. This line is intentionally long to test the handling of long definitions in the database and application.',
        class: 'noun',
        is_formal: 0,
        infinitive: '__TestInsert',
        synonyms: '__TestInsert\n__TestAdd\n__TestCreate',
        antonyms: '__ProductionDelete\n__ProductionRemove\n__ProductionDestroy',
    },
    insertNull: {
        language_id: 1,
        created_at: null,
        value: '__TestInsertNull',
        translations: null,
        definition: null,
        class: null,
        is_formal: null,
        infinitive: null,
        synonyms: null,
        antonyms: null,
    },
    insertPartial: {
        language_id: 1,
        // created_at: null,
        value: '__TestInsertPartial',
        // translations: null,
        // definition: null,
        // class: null
        // is_formal: null,
        // infinitive: null,
        // synonyms: null,
        // antonyms: null,
    },
    insertDuplicate: {
        language_id: 1,
        value: '__InsertDuplicate',
    },
};
