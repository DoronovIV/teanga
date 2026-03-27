import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppStore } from '@store/app.store';

@Component({
    selector: 'app-language-page',
    templateUrl: './language.html',
    styleUrl: './language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePage {
    public mode: 'read' | 'edit' = 'read';
    public language = inject(AppStore).language;
}
