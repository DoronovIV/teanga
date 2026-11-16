import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppStore } from '@store/app-store';

@Component({
    selector: 'app-theme-icon',
    templateUrl: './theme.html',
    styleUrl: './theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeIcon {
    public theme = inject(AppStore).theme;
    public iconSize = '20';
}
