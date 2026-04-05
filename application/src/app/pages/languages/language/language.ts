import { ChangeDetectionStrategy, Component, effect, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { LanguageStore } from '@store/language/language-store';
import { map } from 'rxjs';

@Component({
    selector: 'app-language-page',
    templateUrl: './language.html',
    styleUrl: './language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePage implements OnInit {
    public language = inject(LanguageStore).language;

    private readonly _route = inject(ActivatedRoute);
    private readonly _languageId = toSignal(
        this._route.params.pipe(map((params) => Number(params['id']))),
    );

    private readonly _languageStore = inject(LanguageStore);
    private readonly _languages = this._languageStore.languages;

    constructor() {
        effect(() => {
            if (this.language()?.id) {
                return;
            }

            const language = this._languages().find((language) => {
                return language.id === this._languageId();
            });

            if (!language) {
                return;
            }

            this._languageStore.selectLanguage(language);
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
