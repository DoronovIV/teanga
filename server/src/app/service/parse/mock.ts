import { DbLanguage } from '../../types/db-language.js';
import { Language } from '../../types/language.js';

export const mock: {
    endonyms: { appLanguage: Language; dbLanguage: DbLanguage };
    otherNames: { appLanguage: Language; dbLanguage: DbLanguage };
    both: { appLanguage: Language; dbLanguage: DbLanguage };
    neither: { appLanguage: Language; dbLanguage: DbLanguage };
} = {
    endonyms: {
        appLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: ['TestInsert', 'AAAA'],
            other_names: [''],
            notes: [''],
        },
        dbLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: '[\"TestInsert\",\"AAAA\"]',
            other_names: '[\"\"]',
            notes: '[\"\"]',
        },
    },

    otherNames: {
        appLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: [''],
            other_names: ['TEST INSERT', 'ABCDE', 'PPPP'],
            notes: [''],
        },
        dbLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: '[\"\"]',
            other_names: '[\"TEST INSERT\",\"ABCDE\",\"PPPP\"]',
            notes: '[\"\"]',
        },
    },

    both: {
        appLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: ['TestInsert', 'AAAA'],
            other_names: ['TEST INSERT', 'ABCDE', 'PPPP'],
            notes: [''],
        },
        dbLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: '[\"TestInsert\",\"AAAA\"]',
            other_names: '[\"TEST INSERT\",\"ABCDE\",\"PPPP\"]',
            notes: '[\"\"]',
        },
    },

    neither: {
        appLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: [''],
            other_names: [''],
            notes: [''],
        },
        dbLanguage: {
            iso_name: '__TestInsert',
            set_1: 'ti',
            set_2: 'tsi',
            set_3: 'tsi',
            scope: 'TestInsert',
            type: 'TestInsert',
            endonyms: '[\"\"]',
            other_names: '[\"\"]',
            notes: '[\"\"]',
        },
    },
};
