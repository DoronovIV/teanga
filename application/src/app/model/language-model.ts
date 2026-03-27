export type LanguageModel = {
    id: number;
    iso_name: string;
    set_1: string;
    set_2: string;
    set_3: string;
    scope: string;
    type: string;
    endonyms: string[];
    other_names: string[] | null;
    notes: string[] | null;
};
