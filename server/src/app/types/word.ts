export type Word = {
    id?: number;
    language_id: number;
    created_at?: string;
    forms: string[];
    translations: string[];
    definitions: string[];
    classes: string[];
    is_formal: boolean;
    lemmas: string[];
    synonyms: string[];
    antonyms: string[];
};
