import { DRIZZLE_CLIENT } from '@database/drizzle.provider';
import { languages } from '@database/schema';
import { Inject, Injectable } from '@nestjs/common';
import { DrizzleD1Database } from 'drizzle-orm/d1';

@Injectable()
export class LanguageRepository {
    constructor(@Inject(DRIZZLE_CLIENT) private _db: DrizzleD1Database) {}

    public async getLanguages(): Promise<any> {
        return await this._db.select().from(languages);
    }
}
