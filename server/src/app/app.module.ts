import { WordsModule } from '@modules/words/words.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [WordsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
