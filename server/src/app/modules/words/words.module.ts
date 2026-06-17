import { Module } from '@nestjs/common';
import { LanguageModule } from './submodules/language/language.module';

@Module({
    imports: [LanguageModule],
})
export class WordsModule {}
