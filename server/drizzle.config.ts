import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const { DB_FILE_NAME, CONFIG, HOME } = process.env;
const localUrl = `file:${HOME}${CONFIG}${DB_FILE_NAME}`;

export default defineConfig({
    out: '.drizzle',
    schema: 'src/app/database/schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: localUrl,
    },
});
