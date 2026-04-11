import { ChangeDetectionStrategy, Component, effect, inject, OnInit } from '@angular/core';
import { AppStore } from '@store/app-store';
import { LanguageStore } from '@store/language/language-store';

@Component({
    selector: 'app-language-page',
    templateUrl: './language.html',
    styleUrl: './language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePage implements OnInit {
    public language = inject(LanguageStore).language;

    private readonly _languageId = inject(AppStore).objectId;

    private readonly _languageStore = inject(LanguageStore);
    private readonly _languages = this._languageStore.languages;

    constructor() {
        effect(() => {
            const language = this._languages().find((language) => {
                return language.id === this._languageId();
            });

            this._languageStore.selectLanguage(language ?? null);
        });
    }

    public ngOnInit(): void {
        this._getLanguages();
    }

    private _getLanguages(): void {
        if (this.language()?.id) {
            return;
        }

        this._languageStore.getLanguages();
    }
}
