import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-players',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './players.component.html',
    styleUrls: ['players.component.scss'],
})
export class PlayersComponent implements OnInit {

    public activeTab = 1;

    public ngOnInit(): void {
        // ignore
    }

}
