import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordAPI } from '@api/word-api';
import { WordModel } from '@model/word-model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, switchMap, tap } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-word-page',
    templateUrl: './word.html',
    styleUrl: './word.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordPage implements OnInit {
    public word = signal<WordModel | null>(null);
    private readonly _wordAPI = inject(WordAPI);
    private readonly _route = inject(ActivatedRoute);

    public ngOnInit(): void {
        this._getWord();
    }

    private _getWord(): void {
        this._route.params
            .pipe(
                map((params) => {
                    return params['id'];
                }),
                switchMap((wordId) => {
                    return this._wordAPI.getById$(wordId);
                }),
                tap((word) => {
                    this.word.set(word);
                }),
                untilDestroyed(this),
            )
            .subscribe();
    }
}
