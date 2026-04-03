import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LanguageModel } from '@model/language-model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AppStore } from '@store/app.store';

@UntilDestroy()
@Component({
    selector: 'app-languages-page',
    templateUrl: './languages.html',
    styleUrl: './languages.scss',
    imports: [RouterLink, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesPage implements OnInit {
    public languages = inject(AppStore).languages;

    private readonly _appStore = inject(AppStore);

    public ngOnInit(): void {
        this._getLanguages();
    }

    public select(language: LanguageModel): void {
        this._appStore.selectLanguage(language);
    }

    public delete(language: LanguageModel): void {
        const { id: languageId } = language;

        if (!languageId) {
            return;
        }

        this._appStore.deleteLanguage(languageId);
    }

    private _getLanguages(): void {
        if (this.languages().length) {
            return;
        }

        this._appStore.getLanguages();
    }
}
