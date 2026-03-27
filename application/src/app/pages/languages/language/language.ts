import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageModel } from '@model/language-model';
import { switchMap, tap } from 'rxjs';

import { LanguageAPI } from '../language-api';

@Component({
    selector: 'app-language-page',
    templateUrl: './language.html',
    styleUrl: './language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePage implements OnInit {
    public mode: 'read' | 'edit' = 'read';
    public language = signal<LanguageModel | null>(null);
    private readonly _languageAPI = inject(LanguageAPI);

    constructor(private readonly _route: ActivatedRoute) {}

    public ngOnInit(): void {
        this._initLanguage();
    }

    private _initLanguage(): void {
        this._route.params
            .pipe(
                switchMap((params) => {
                    const languageId = params['id'];

                    return this._languageAPI.getById$(languageId);
                }),
                tap((language) => {
                    this.language.set(language);
                }),
            )
            .subscribe();
    }
}
