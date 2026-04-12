export type Word = {
    id?: number;
    language_id: number;
    created_at?: string;
    value: string;
    translations: string[];
    definitions: string[];
    classes: string[];
    is_formal: boolean;
    infinitive: string;
    synonyms: string[];
    antonyms: string[];
};
