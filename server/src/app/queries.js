export const queries = {
    languages: {
        create: `
            CREATE TABLE IF NOT EXISTS languages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                iso_name TEXT NOT NULL,
                set_1 TEXT NOT NULL,
                set_2 TEXT NOT NULL,
                set_3 TEXT NOT NULL,
                scope TEXT NOT NULL,
                type TEXT NOT NULL,
                endonyms TEXT NOT NULL,
                other_names DEFAULT NULL,
                notes DEFAULT NULL
            );
        `,
        insert: `
            INSERT INTO languages (iso_name, set_1, set_2, set_3, scope, type, endonyms, other_names, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
        selectAll: 'SELECT * FROM languages;',
        selectById: 'SELECT * FROM languages WHERE id = ?;',
    },
    words: {
        create: `
            CREATE TABLE IF NOT EXISTS words (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                FOREIGN KEY(language_id) REFERENCES language(id),
                time DATETIME DEFAULT CURRENT_TIMESTAMP,
                value TEXT NOT NULL,
                translations TEXT DEFAULT NULL,
                definition TEXT DEFAULT NULL,
                class TEXT DEFAULT NULL,
                is_formal INTEGER DEFAULT 0,
                infinitive TEXT DEFAULT NULL,
                synonyms TEXT DEFAULT NULL,
                antonyms TEXT DEFAULT NULL
            );
        `,
    },
};
