import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-word-page',
    templateUrl: './word.html',
    styleUrl: './word.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordPage {}
