import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('languages')
export class LanguageController {
    @Get()
    public async getLanguages(): Promise<any> {
        return await this._languageService.getLanguages();
    }

    constructor(private readonly _languageService: LanguageService) {}
}
