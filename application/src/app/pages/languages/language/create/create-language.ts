import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { LanguageForm } from '@forms/language/language';
import { LanguageModel } from '@model/language-model';
import { LanguageStore } from '@store/language/language-store';

@Component({
    selector: 'app-create-language-page',
    templateUrl: './create-language.html',
    styleUrl: './create-language.scss',
    imports: [LanguageForm],
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

    public create(formOutput: LanguageModel): void {
        this._languageStore.createLanguage(formOutput);
    }
}
