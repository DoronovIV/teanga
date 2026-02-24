export const sql = {
    languages: {
        create: `
            CREATE TABLE IF NOT EXISTS languages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                iso_name TEXT UNIQUE NOT NULL,
                set_1 TEXT NOT NULL,
                set_2 TEXT NOT NULL,
                set_3 TEXT NOT NULL,
                scope TEXT NOT NULL,
                type TEXT NOT NULL,
                endonyms TEXT UNIQUE NOT NULL,
                other_names DEFAULT NULL,
                notes DEFAULT NULL
            );
        `,
        delete: 'DELETE FROM languages WHERE id = ?;',
        selectAll: 'SELECT * FROM languages;',
        selectById: 'SELECT * FROM languages WHERE id = ?;',
    },
    words: {
        create: `
            CREATE TABLE IF NOT EXISTS words (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                language_id INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                value TEXT UNIQUE NOT NULL,
                translations TEXT DEFAULT NULL,
                definition TEXT DEFAULT NULL,
                class TEXT DEFAULT NULL,
                is_formal INTEGER DEFAULT 0,
                infinitive TEXT DEFAULT NULL,
                synonyms TEXT DEFAULT NULL,
                antonyms TEXT DEFAULT NULL,
                FOREIGN KEY (language_id) REFERENCES languages (id)
            );
        `,
        delete: 'DELETE FROM words WHERE id = ?;',
        selectAllByLanguageId: 'SELECT * FROM words WHERE language_id = ?;',
        selectById: 'SELECT * FROM words WHERE id = ?;',
    },
    sentences: {
        create: `
            CREATE TABLE IF NOT EXISTS sentences (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                word_id INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                value TEXT UNIQUE NOT NULL,
                is_validated INTEGER DEFAULT 0,
                FOREIGN KEY (word_id) REFERENCES words (id)
            );
        `,
        delete: 'DELETE FROM sentences WHERE id = ?;',
        selectAllByWordId: 'SELECT * FROM sentences WHERE word_id = ?;',
        selectById: 'SELECT * FROM sentences WHERE id = ?;',
    },
    errors: {
        foreignKey: 'FOREIGN KEY constraint failed',
        unique: 'UNIQUE constraint failed',
        notNull: 'NOT NULL constraint failed',
    },
};
