import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LanguageModel } from '@model/language-model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LanguageAPI } from '@pages/languages/language-api';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-languages-page',
    templateUrl: './languages.html',
    styleUrl: './languages.scss',
    imports: [RouterLink, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesPage implements OnInit {
    public languageAPI = inject(LanguageAPI);
    public languages = signal<LanguageModel[]>([]);

    public ngOnInit(): void {
        this._getLanguages();
    }

    private _getLanguages(): void {
        this.languageAPI
            .get$()
            .pipe(
                tap((languages) => {
                    this.languages.set(languages);
                }),
                untilDestroyed(this),
            )
            .subscribe();
    }
}
