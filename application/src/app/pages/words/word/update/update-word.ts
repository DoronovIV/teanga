import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-update-word-page',
    templateUrl: './update-word.html',
    styleUrl: './update-word.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateWordPage {}
