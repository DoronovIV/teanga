import { dev } from '../../service/db.js';
import { sql } from '../../sql.js';

const db = dev().setup;

export function getAllByWordId(wordId) {
    return db.prepare(sql.sentences.selectAllByWordId).all(wordId) ?? null;
}

export function getById(id) {
    return db.prepare(sql.sentences.selectById).get(id) ?? null;
}

export function insert(sentence) {
    const sentenceKeys = Object.keys(sentence).join(', ');
    const insertLine = `INSERT INTO sentences (${sentenceKeys})`;
    const sentenceValues = Object.values(sentence)
        .map(() => '?')
        .join(', ');
    const valuesLine = `VALUES (${sentenceValues})`;
    const query = `${insertLine} ${valuesLine};`;
    const { lastInsertRowid: id } = db.prepare(query).run(Object.values(sentence));

    return getById(id);
}

export function update(id, sentence) {
    const updateLine = `UPDATE sentences`;
    let setLine = 'SET ';

    setLine += Object.keys(sentence)
        .map((key) => {
            return `${key} = ?`;
        })
        .join(', ');

    const whereLine = `WHERE id = ?`;
    const query = `${updateLine} ${setLine} ${whereLine};`;

    db.prepare(query).run([...Object.values(sentence), id]);

    return getById(id);
}

export function remove(id) {
    db.prepare(sql.sentences.delete).run(id);

    return true;
}
