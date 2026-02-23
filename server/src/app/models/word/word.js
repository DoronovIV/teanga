import { dev } from '../../service/db.js';
import { sql } from '../../sql.js';

const db = dev().setup;

export function getAllByLanguageId(languageId) {
    return db.prepare(sql.words.selectAllByLanguageId).all(languageId) ?? null;
}

export function getById(id) {
    return db.prepare(sql.words.selectById).get(id) ?? null;
}

export function insert(word) {
    const wordKeys = Object.keys(word).join(', ');
    const insertLine = `INSERT INTO words (${wordKeys})`;
    const wordValues = Object.values(word)
        .map(() => '?')
        .join(', ');
    const valuesLine = `VALUES (${wordValues})`;
    const query = `${insertLine} ${valuesLine};`;
    const { lastInsertRowid: id } = db.prepare(query).run(Object.values(word));

    return getById(id);
}

export function update(id, word) {
    const updateLine = `UPDATE words`;
    let setLine = 'SET ';

    setLine += Object.keys(word)
        .map((key) => {
            return `${key} = ?`;
        })
        .join(', ');

    const whereLine = `WHERE id = ?x`;
    const query = `${updateLine} ${setLine} ${whereLine};`;

    db.prepare(query).run([...Object.values(word), id]);

    return getById(id);
}

export function remove(id) {
    db.prepare(sql.words.delete).run(id);

    return true;
}
