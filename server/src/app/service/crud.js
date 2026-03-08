/**
 * Insert an object into the database.
 * @param params.db target database (see config.js).
 * @param params.tableName table name.
 * @param params.object object to insert.
 * @returns id of the inserted object.
 */
export function insert(params) {
    const { db, tableName, object } = params;

    const wordKeys = Object.keys(object).join(', ');
    const insertLine = `INSERT INTO ${tableName} (${wordKeys})`;
    const wordValues = Object.values(object)
        .map(() => '?')
        .join(', ');
    const valuesLine = `VALUES (${wordValues})`;
    const query = `${insertLine} ${valuesLine};`;
    const { lastInsertRowid: id } = db.prepare(query).run(Object.values(object));

    return id;
}

/**
 * Update an object in the database.
 * @param params.db target database (see config.js).
 * @param params.tableName table name.
 * @param params.object object to insert.
 * @param params.id id of the object to update.
 * @returns undefined.
 */
export function update(params) {
    const { db, tableName, object, id } = params;

    if (!id) {
        return;
    }

    const updateLine = `UPDATE ${tableName}`;
    let setLine = 'SET ';

    setLine += Object.keys(object)
        .map((key) => {
            return `${key} = ?`;
        })
        .join(', ');

    const whereLine = `WHERE id = ?`;
    const query = `${updateLine} ${setLine} ${whereLine};`;

    db.prepare(query).run([...Object.values(object), id]);
}
