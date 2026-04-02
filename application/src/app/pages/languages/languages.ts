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
    private readonly _appStore = inject(AppStore);
    public languages = this._appStore.languages;

    public ngOnInit(): void {
        this._getLanguages();
    }

    public selectLanguage(language: LanguageModel): void {
        this._appStore.selectLanguage(language);
    }

    private _getLanguages(): void {
        this._appStore.getLanguages();
    }
}
