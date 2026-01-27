-- see https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
CREATE TABLE IF NOT EXISTS languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    iso_name TEXT NOT NULL,
    set_1 TEXT NOT NULL,
    set_2 TEXT NOT NULL,
    set_3 TEXT NOT NULL,
    scope TEXT NOT NULL,
    type TEXT NOT NULL,
    endonums TEXT NOT NULL,
    other_names DEFAULT NULL,
    notes DEFAULT NULL,
);
