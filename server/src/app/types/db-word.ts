export type DbWord = {
    id?: number;
    language_id: number;
    created_at?: string;
    forms: string;
    translations: string;
    definitions: string;
    classes: string;
    is_formal: number;
    lemmas: string;
    synonyms: string;
    antonyms: string;
};
