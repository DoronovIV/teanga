import { Language } from '../../types/language.js';

export const languageMock: {
    insert: Language;
    insertPartial: Language;
    insertIncomplete: any;
    update: Language;
} = {
    insert: {
        iso_name: '__TestInsert',
        set_1: 'ti',
        set_2: 'tsi',
        set_3: 'tsi',
        scope: 'TestInsert',
        type: 'TestInsert',
        endonyms: ['TestInsert'],
        other_names: [''],
        notes: [''],
    },
    insertPartial: {
        iso_name: '__TestInsertPartial',
        set_1: 'tp',
        set_2: 'tip',
        set_3: 'tip',
        scope: 'TestInsertPartial',
        type: 'TestInsertPartial',
        endonyms: ['TestInsertPartial'],
        other_names: [''],
        notes: [''],
    },
    insertIncomplete: {
        set_1: 't',
        set_2: 'tic',
        set_3: 'tic',
        scope: 'TestInsertIncomplete',
        type: 'TestInsertIncomplete',
        endonyms: ['TestInsertIncomplete'],
        other_names: [''],
        notes: [''],
    },
    update: {
        iso_name: 'TestUpdate',
        set_1: 'tu',
        set_2: 'tsu',
        set_3: 'tsu',
        scope: 'TestUpdate',
        type: 'TestUpdate',
        endonyms: ['TestUpdate'],
        other_names: [''],
        notes: [''],
    },
};
