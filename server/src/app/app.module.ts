import { LanguageModule } from '@modules/language/language.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [LanguageModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
