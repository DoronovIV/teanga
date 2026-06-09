import { DrizzleModule } from '@database/drizzle.module';
import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageRepository } from './language.repository';
import { LanguageService } from './language.service';

@Module({
    controllers: [LanguageController],
    providers: [LanguageService, LanguageRepository],
    imports: [DrizzleModule],
})
export class LanguageModule {}
