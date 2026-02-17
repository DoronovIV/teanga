import { queries } from '../queries.js';
import { dev } from '../service/db.js';

export function getAll() {
    return dev.setup.prepare(queries.languages.selectAll).all();
}

export function getById(id) {
    return dev.setup.prepare(queries.languages.selectById).get(id);
}
