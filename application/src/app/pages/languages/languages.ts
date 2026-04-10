import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PenIcon } from '@icons/pen/pen';
import { TrashBinIcon } from '@icons/trash-bin/trash-bin';
import { LanguageModel } from '@model/language-model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { LanguageStore } from '@store/language/language-store';

@UntilDestroy()
@Component({
    selector: 'app-languages-page',
    templateUrl: './languages.html',
    styleUrl: './languages.scss',
    imports: [RouterLink, RouterOutlet, PenIcon, TrashBinIcon],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesPage implements OnInit {
    public languages = inject(LanguageStore).languages;

    private readonly _languageStore = inject(LanguageStore);

    public ngOnInit(): void {
        this._getLanguages();
    }

    public select(language: LanguageModel): void {
        this._languageStore.selectLanguage(language);
    }

    public delete(language: LanguageModel): void {
        const { id: languageId } = language;

        if (!languageId) {
            return;
        }

        this._languageStore.deleteLanguage(languageId);
    }

    private _getLanguages(): void {
        if (this.languages().length) {
            return;
        }

        this._languageStore.getLanguages();
    }
}
