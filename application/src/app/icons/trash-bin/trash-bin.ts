import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-trash-bin-icon',
    templateUrl: './trash-bin.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrashBinIcon {}
