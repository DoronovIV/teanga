import { DbLanguage } from '../../types/db-language.js';
import { Language } from '../../types/language.js';

export function parseTo(language: Language): DbLanguage {
    const { endonyms, other_names, notes } = language;
    const transformProperty = (prop: string[]): string => {
        return JSON.stringify(prop);
    };

    const transformedEndonyms = transformProperty(endonyms);
    const transformedOtherNames = transformProperty(other_names);
    const transformedNotes = transformProperty(notes);

    return {
        ...language,
        endonyms: transformedEndonyms,
        other_names: transformedOtherNames,
        notes: transformedNotes,
    };
}

export function parseFrom(language: DbLanguage): Language {
    const { endonyms, other_names, notes } = language;
    const transformProperty = (prop: string): string[] => {
        return JSON.parse(prop);
    };

    const transformedEndonyms = transformProperty(endonyms);
    const transformedOtherNames = transformProperty(other_names);
    const transformedNotes = transformProperty(notes);

    return {
        ...language,
        endonyms: transformedEndonyms,
        other_names: transformedOtherNames,
        notes: transformedNotes,
    };
}
