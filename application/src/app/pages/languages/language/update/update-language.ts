import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { LanguageModel } from '@model/language-model';
import { LanguageStore } from '@store/language/language-store';

@Component({
    selector: 'app-update-language-page',
    templateUrl: './update-language.html',
    styleUrl: './update-language.scss',
    imports: [FormField, RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateLanguagePage implements OnInit {
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

    public ngOnInit(): void {
        const language = this._languageStore.language();

        if (!language) {
            return;
        }

        this.languageModel.set(language);
    }

    public update(): void {
        const language = this.languageModel();

        if (!language) {
            return;
        }

        // console.log('model:', this.languageModel());
    }
}
