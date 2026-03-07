import { schema } from '../../schema.js';
import { dev } from '../../service/db.js';

const db = dev().setup;

export function getAllByLanguageId(languageId) {
    return db.prepare(schema.words.selectAllByLanguageId).all(languageId) ?? null;
}

export function getById(id) {
    return db.prepare(schema.words.selectById).get(id) ?? null;
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

    const whereLine = `WHERE id = ?`;
    const query = `${updateLine} ${setLine} ${whereLine};`;

    db.prepare(query).run([...Object.values(word), id]);

    return getById(id);
}

export function remove(id) {
    db.prepare(schema.words.delete).run(id);

    return true;
}
