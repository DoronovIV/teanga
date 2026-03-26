import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.html',
    styleUrl: './statistics.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsPage {}
