import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DRIZZLE_CLIENT, drizzleProvider } from './drizzle.provider';

@Module({
    providers: [drizzleProvider],
    exports: [DRIZZLE_CLIENT],
    imports: [ConfigModule],
})
export class DrizzleModule {}
