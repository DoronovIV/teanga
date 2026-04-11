import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppStore } from '@store/app-store';

@Component({
    selector: 'app-pen-icon',
    templateUrl: './pen.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PenIcon {
    public theme = inject(AppStore).theme;
}
