import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { words } from './words';

export const sentences = sqliteTable('sentences', {
    id: int().primaryKey({ autoIncrement: true }),
    word_id: int().references(() => words.id),
    created_at: text()
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    value: text().notNull(),
    is_validated: int().notNull().default(0),
});
