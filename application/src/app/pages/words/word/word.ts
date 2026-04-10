import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WordAPI } from '@api/word-api';
import { WordModel } from '@model/word-model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DefaultValue } from '@pipes/default-value';
import { AppStore } from '@store/app-store';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-word-page',
    templateUrl: './word.html',
    styleUrl: './word.scss',
    imports: [AsyncPipe, DefaultValue, NgTemplateOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordPage {
    public word$: Observable<WordModel> | null = null;
    private readonly _wordAPI = inject(WordAPI);
    private readonly _wordId = inject(AppStore).objectId;
    private readonly _destroyRef = inject(DestroyRef);

    constructor() {
        effect(() => {
            this.word$ = this._wordAPI
                .getById$(this._wordId())
                .pipe(takeUntilDestroyed(this._destroyRef));
        });
    }
}
