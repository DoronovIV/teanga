import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-update-language-page',
    templateUrl: './update-language.html',
    styleUrl: './update-language.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateLanguagePage {}
