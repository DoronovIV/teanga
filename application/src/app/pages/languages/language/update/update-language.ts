import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { LanguageForm } from '@forms/language/language';
import { LanguageModel } from '@model/language-model';
import { AppStore } from '@store/app-store';
import { LanguageStore } from '@store/language/language-store';

@Component({
    selector: 'app-update-language-page',
    templateUrl: './update-language.html',
    styleUrl: './update-language.scss',
    imports: [LanguageForm],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateLanguagePage {
    public languageModel = signal<LanguageModel>({
        iso_name: '',
        set_1: '',
        set_2: '',
        set_3: '',
        scope: '',
        type: '',
        endonyms: [''],
    });

    private readonly _languageStore = inject(LanguageStore);
    private readonly _languages = this._languageStore.languages;
    private readonly _languageId = inject(AppStore).objectId;

    constructor() {
        if (!this._languages().length) {
            this._languageStore.getLanguages();
        }

        effect(() => {
            const language = this._languages().find((language) => {
                return language.id === this._languageId();
            });

            this._languageStore.selectLanguage(language ?? null);

            if (!language) {
                return;
            }

            this.languageModel.set(language);
        });
    }

    public update(languageModel: LanguageModel): void {
        this._languageStore.updateLanguage(languageModel);
    }
}
