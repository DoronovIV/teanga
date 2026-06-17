import { Injectable } from '@nestjs/common';
import { LanguageRepository } from './language.repository';

@Injectable()
export class LanguageService {
    constructor(private readonly _languageRepository: LanguageRepository) {}

    public async getLanguages(): Promise<any> {
        return await this._languageRepository.getLanguages();
    }
}
