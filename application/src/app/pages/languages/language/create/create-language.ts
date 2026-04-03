import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { LanguageModel } from '@model/language-model';
import { AppStore } from '@store/app.store';

@Component({
    selector: 'app-create-language-page',
    templateUrl: './create-language.html',
    styleUrl: './create-language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormField, RouterLink],
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
    private readonly _appStore = inject(AppStore);

    public create(): void {
        const language = this.languageModel();

        this._appStore.createLanguage(language);
    }
}
