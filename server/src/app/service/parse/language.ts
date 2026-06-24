import { DbLanguage } from '../../types/db-language.js';
import { Language } from '../../types/language.js';

import { transformStringFrom, transformStringTo } from './common.js';

export function parseTo(language: Language): DbLanguage {
    const { endonyms, other_names, notes } = language;
    const transformedEndonyms = transformStringTo(endonyms);
    const transformedOtherNames = transformStringTo(other_names);
    const transformedNotes = transformStringTo(notes);

    return {
        ...language,
        endonyms: transformedEndonyms,
        other_names: transformedOtherNames,
        notes: transformedNotes,
    };
}

export function parseFrom(language: DbLanguage): Language {
    const { endonyms, other_names, notes } = language;
    const transformedEndonyms = transformStringFrom(endonyms);
    const transformedOtherNames = transformStringFrom(other_names);
    const transformedNotes = transformStringFrom(notes);

    return {
        ...language,
        endonyms: transformedEndonyms,
        other_names: transformedOtherNames,
        notes: transformedNotes,
    };
}
