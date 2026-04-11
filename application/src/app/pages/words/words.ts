import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageAPI } from '@api/language-api';
import { WordModel } from '@model/word';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LanguageStore } from '@store/language/language-store';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-words-page',
    templateUrl: './words.html',
    styleUrl: './words.scss',
    imports: [RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPage implements OnInit {
    public language = inject(LanguageStore).language;
    public words = signal<WordModel[]>([]);
    private readonly _languageApi = inject(LanguageAPI);

    public ngOnInit(): void {
        this._getWords();
    }

    private _getWords(): void {
        const language = this.language();

        if (!language?.id) {
            return;
        }

        this._languageApi
            .getWords$(language.id)
            .pipe(
                tap((words) => {
                    this.words.set(words);
                }),
                untilDestroyed(this),
            )
            .subscribe();
    }
}
