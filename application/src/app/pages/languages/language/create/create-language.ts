import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { LanguageAPI } from '@api/language-api';
import { LanguageModel } from '@model/language-model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppStore } from '@store/app.store';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-create-language-page',
    templateUrl: './create-language.html',
    styleUrl: './create-language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormField],
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
    private readonly _languageAPI = inject(LanguageAPI);
    private readonly _appStore = inject(AppStore);

    public create(): void {
        this._languageAPI
            .create$(this.languageModel())
            .pipe(
                tap((language) => {
                    if (!language.id) {
                        return;
                    }

                    this._appStore.createLanguage(language);
                }),
                untilDestroyed(this),
            )
            .subscribe();
    }
}
