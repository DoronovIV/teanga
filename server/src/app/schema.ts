export const schema = {
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
                other_names TEXT NOT NULL,
                notes TEXT NOT NULL
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
                forms TEXT UNIQUE NOT NULL,
                translations TEXT NOT NULL,
                definitions TEXT NOT NULL,
                classes TEXT NOT NULL,
                is_formal INTEGER DEFAULT 0,
                wasted INTEGER DEFAULT 0,
                lemmas TEXT NOT NULL,
                synonyms TEXT NOT NULL,
                antonyms TEXT NOT NULL,
                FOREIGN KEY (language_id) REFERENCES languages (id)
            );
        `,
        delete: 'DELETE FROM words WHERE id = ?;',
        selectAll: 'SELECT * FROM words;',
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
                is_valid INTEGER DEFAULT 0,
                wasted INTEGER DEFAULT 0,
                FOREIGN KEY (word_id) REFERENCES words (id)
            );
        `,
        delete: 'DELETE FROM sentences WHERE id = ?;',
        selectAll: 'SELECT * FROM sentences;',
        selectAllByWordId: 'SELECT * FROM sentences WHERE word_id = ?;',
        selectById: 'SELECT * FROM sentences WHERE id = ?;',
    },
};
