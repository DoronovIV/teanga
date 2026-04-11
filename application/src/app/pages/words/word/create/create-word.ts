import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-create-word-page',
    templateUrl: './create-word.html',
    styleUrl: './create-word.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWordPage {}
