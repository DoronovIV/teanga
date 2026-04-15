import { createClient } from '@libsql/client';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const DRIZZLE_CLIENT = 'DRIZZLE_CLIENT';

export const drizzleProvider = {
    provide: DRIZZLE_CLIENT,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
        const client = createClient({
            url: configService.getOrThrow<string>('DB_FILE_NAME'),
        });

        return drizzle(client, { schema });
    },
};
