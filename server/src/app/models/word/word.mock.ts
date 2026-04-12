import { Word } from '../../types/word.js';

export const wordMock: {
    insert: Word;
    insertNull: Word;
    insertDuplicate: Word;
    update: Word;
} = {
    insert: {
        language_id: 1,
        value: '__TestInsert',
        translations: ['__TestInsert'],
        definitions: [
            'A test word that is used for testing purposes in the development process. This line is intentionally long to test the handling of long definitions in the database and application.',
        ],
        classes: ['noun'],
        is_formal: false,
        infinitive: '__TestInsert',
        synonyms: ['__TestInsert', '__TestAdd', '__TestCreate'],
        antonyms: ['__ProductionDelete', '__ProductionRemove', '__ProductionDestroy'],
    },
    insertNull: {
        language_id: 1,
        value: '__TestInsertNull',
        translations: [''],
        definitions: [''],
        classes: [''],
        is_formal: false,
        infinitive: '',
        synonyms: [''],
        antonyms: [''],
    },
    insertDuplicate: {
        language_id: 1,
        value: '__InsertDuplicate',
        translations: [''],
        definitions: [''],
        classes: [''],
        is_formal: false,
        infinitive: '',
        synonyms: [''],
        antonyms: [''],
    },
    update: {
        language_id: 1,
        value: '__TestUpdate',
        translations: ['__TestUpdate'],
        definitions: [
            'A test word that is used for testing purposes in the development process. This line is intentionally long to test the handling of long definitions in the database and application.',
        ],
        classes: ['noun'],
        is_formal: false,
        infinitive: '__TestUpdate',
        synonyms: ['__TestEdit', '__TestAmend', '__TestModify'],
        antonyms: ['__ProductionKeep', '__ProductionPreserve', '__ProductionConserve'],
    },
};
