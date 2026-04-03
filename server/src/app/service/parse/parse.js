export function parseLanguage(language) {
    const { endonyms, other_names } = language;

    const transformedEndonyms = transform(endonyms);
    const transformedOtherNames = transform(other_names);

    return {
        ...language,
        endonyms: transformedEndonyms,
        other_names: transformedOtherNames,
    };
}

function transform(prop) {
    if (!prop) {
        return prop;
    }

    if (Array.isArray(prop)) {
        return JSON.stringify(prop);
    }

    return JSON.parse(prop);
}
