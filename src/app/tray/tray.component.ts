import { Component, OnInit } from '@angular/core';
import { TrayService } from './tray.service'
import { Tray } from './tray'

@Component({
    selector: 'tray',
    template: require('./tray.component.html')
})

export class TrayComponent {
    tray: Tray;

    constructor(
        private trayService: TrayService,
    ) {

    }

    getTray(): void {
        this.trayService.getTray()
            .then((tray: Tray) => this.tray = tray);
    }

    ngOnInit(): void {
        this.getTray();
    }
}
