import { createClient } from '@libsql/client';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const DRIZZLE_CLIENT = 'DRIZZLE_CLIENT';

const { HOME, CONFIG, DB_FILE_NAME } = process.env;
const fullDbFilePath = `${HOME}/${CONFIG}/${DB_FILE_NAME}`;

if (!DB_FILE_NAME) {
    throw new Error('DB_FILE_NAME environment variable is missing');
}

const fullUrl = `file:${fullDbFilePath}`;

export const drizzleProvider = {
    provide: DRIZZLE_CLIENT,
    useFactory: () => {
        const client = createClient({ url: fullUrl });

        return drizzle(client, { schema });
    },
};
