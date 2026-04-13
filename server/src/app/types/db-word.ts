export type DbWord = {
    id?: number;
    language_id: number;
    created_at?: string;
    value: string;
    translations: string;
    definitions: string;
    classes: string;
    is_formal: number;
    infinitive: string;
    synonyms: string;
    antonyms: string;
};
