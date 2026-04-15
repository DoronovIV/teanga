import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller()
export class LanguageController {
    @Get()
    public getHello(): string {
        return this._languageService.getHello();
    }

    constructor(private readonly _languageService: LanguageService) {}
}
