export type WordModel = {
    id: number;
    language_id: number;
    created_at: string;
    values: string[];
    translations: string[];
    definitions: string[];
    classes: string[];
    is_format: boolean;
    lemmas: string[];
    synonyms: string[] | null;
    antonyms: string[] | null;
};
