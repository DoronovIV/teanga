import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    Injector,
    OnInit,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from '@store/app.store';
import { map } from 'rxjs';

@Component({
    selector: 'app-language-page',
    templateUrl: './language.html',
    styleUrl: './language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePage implements OnInit {
    public language = inject(AppStore).language;

    private readonly _injector = inject(Injector);
    private readonly _route = inject(ActivatedRoute);
    private readonly _languageId = toSignal(
        this._route.params.pipe(map((params) => Number(params['id']))),
    );

    private readonly _appStore = inject(AppStore);
    private readonly _languages = inject(AppStore).languages;

    public ngOnInit(): void {
        this._getLanguages();
        this._initLanguage();
    }

    private _getLanguages(): void {
        if (this.language()?.id) {
            return;
        }

        this._appStore.getLanguages();
    }

    private _initLanguage(): void {
        effect(
            () => {
                if (this.language()?.id) {
                    return;
                }

                const language = this._languages().find((language) => {
                    return language.id === this._languageId();
                });

                if (!language) {
                    return;
                }

                this._appStore.selectLanguage(language);
            },
            { injector: this._injector },
        );
    }
}
