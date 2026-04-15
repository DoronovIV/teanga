import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageRepository {
    public getHello(): string {
        return 'Hello World!';
    }
}
