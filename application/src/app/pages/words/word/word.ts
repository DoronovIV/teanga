import { ChangeDetectionStrategy, Component, inject, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { WordAPI } from '@api/word-api';
import { WordModel } from '@model/word-model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-word-page',
    templateUrl: './word.html',
    styleUrl: './word.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordPage {
    public word: Signal<WordModel | undefined> | null = signal(undefined);
    private readonly _wordAPI = inject(WordAPI);
    private readonly _route = inject(ActivatedRoute);
    private readonly _wordId = toSignal(
        this._route.params.pipe(map((params) => Number(params['id']))),
    );

    constructor() {
        this.word = toSignal<WordModel>(this._wordAPI.getById$(this._wordId()));
    }
}
