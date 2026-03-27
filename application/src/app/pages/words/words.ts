import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-words-page',
    templateUrl: './words.html',
    styleUrl: './words.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPage {}
