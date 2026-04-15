import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageService {
    public getHello(): string {
        return 'Hello World!';
    }
}
