import { Module } from '@nestjs/common';
import { DRIZZLE_CLIENT, drizzleProvider } from './drizzle.provider';

@Module({
    providers: [drizzleProvider],
    exports: [DRIZZLE_CLIENT],
})
export class DrizzleModule {}
