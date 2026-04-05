import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { LanguageModel } from '@model/language-model';
import { LanguageStore } from '@store/language/language-store';

@Component({
    selector: 'app-create-language-page',
    templateUrl: './create-language.html',
    styleUrl: './create-language.scss',
    imports: [FormField, RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateLanguagePage {
    public languageModel = signal<LanguageModel>({
        iso_name: '',
        set_1: '',
        set_2: '',
        set_3: '',
        scope: '',
        type: '',
        endonyms: [''],
    });

    public languageForm = form(this.languageModel);
    private readonly _languageStore = inject(LanguageStore);

    public create(): void {
        const language = this.languageModel();

        this._languageStore.createLanguage(language);
    }
}
