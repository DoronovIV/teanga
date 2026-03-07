import { schema } from '../../schema.js';
import { dev } from '../../service/db.js';

const db = dev().test;

export function getAll() {
    return db.prepare(schema.languages.selectAll).all();
}

export function getById(id) {
    return db.prepare(schema.languages.selectById).get(id) ?? null;
}

/**
 * @returns id of the newly created language
 */
export function insert(language) {
    const languageKeys = Object.keys(language).join(', ');
    const insertLine = `INSERT INTO languages (${languageKeys})`;
    const languageValues = Object.values(language)
        .map(() => '?')
        .join(', ');
    const valuesLine = `VALUES (${languageValues})`;
    const query = `${insertLine} ${valuesLine};`;
    const { lastInsertRowid: id } = db.prepare(query).run(Object.values(language));

    return getById(id);
}

/**
 * @returns updated language
 */
export function update(id, language) {
    const updateLine = `UPDATE languages`;
    let setLine = 'SET ';

    setLine += Object.keys(language)
        .map((key) => {
            return `${key} = ?`;
        })
        .join(', ');

    const whereLine = `WHERE id = ?;`;

    const query = `${updateLine} ${setLine} ${whereLine}`;

    db.prepare(query).run([...Object.values(language), id]);

    return getById(id);
}

export function remove(id) {
    db.prepare(schema.languages.delete).run(id);

    return true;
}
