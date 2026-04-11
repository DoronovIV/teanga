export type WordModel = {
    id: number;
    language_id: number;
    created_at: string;
    value: string;
    translations: string[];
    definitions: string[];
    classes: string[];
    is_format: boolean;
    infinitive: string;
    synonyms: string[] | null;
    antonyms: string[] | null;
};
