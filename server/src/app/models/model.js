/**
 * Arrays: Single line string values (names, words) are separated by '\n'.
 * Multi line ones (sentences, expressions) are separated by '\n\n'.
 *
 * Prefixes: '__' means deletable test object, '##' - constant one.
 */

/**
 * Language object model.
 * tableName: `languages`.
 * @typedef {Object} Language
 * @property {number} id - A unique identifier for an object.
 * @property {string} iso_name - The ISO name of the language (e.g. "English", "German").
 * @property {string} set_1 - The ISO 639-1 code of the language (e.g. "en", "de").
 * @property {string} set_2 - The ISO 639-2 code of the language (e.g. "eng", "deu").
 * @property {string} set_3 - The ISO 639-3 code of the language (e.g. "eng", "deu").
 * @property {string} scope - The scope of the language (e.g. "Individual", "Macrolanguage").
 * @property {string} type - The type of the language (e.g. "Living", "Extinct").
 * @property {string} endonyms - The endonyms of the language (e.g. "English", "Deutsch").
 * @property {string} other_names - Other names of the language (optional).
 * @property {string} notes - Notes about the language (optional).
 */

/**
 * Word object model.
 * tableName: `words`.
 * @typedef {Object} Word
 * @property {number} id - A unique identifier for an object.
 * @property {number} language_id - [foreign key] The id of the language this word belongs to.
 * @property {string} created_at - The date and time when the word was inserted.
 * @property {string} value - The value of the word (i.e. the word itself, e.g. "Hallo").
 * @property {string} translations - The translations of the word (optional).
 * @property {string} definition - The definition of the word (optional).
 * @property {string} class - The class of the word (e.g. verb, noun) (optional).
 * @property {number} is_formal - Whether the word is formal (1) or informal (0) (optional, default 0).
 * @property {string} infinitive - The infinitive form of the word (optional).
 * @property {string} synonyms - The synonyms of the word (optional).
 * @property {string} antonyms - The antonyms of the word (optional).
 */

/**
 * Sentence object model.
 * tableName: `sentences`.
 * @typedef {Object} Sentence
 * @property {number} id - A unique identifier for an object.
 * @property {number} word_id - [foreign key] The id of the word this sentence belongs to.
 * @property {string} created_at - The date and time when the sentence was inserted.
 * @property {string} value - The value of the sentence (i.e. the sentence itself, e.g. "Hallo, wie geht es dir?").
 * @property {number} is_validated - Whether the sentence was validated by the AI (1) or not (0) (optional, default 0).
 */
