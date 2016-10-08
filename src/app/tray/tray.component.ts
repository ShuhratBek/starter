import { Component, OnInit } from '@angular/core';
import { TrayService } from './tray.service';
import { Tray } from './tray';

@Component({
    selector: 'tray',
    template: require('./tray.component.html')
})

export class TrayComponent implements OnInit {
    trays: Array<Tray>;

    constructor(
        private trayService: TrayService
    ) {

    }

    getItems(): void {
        this.trayService.getItems()
            .then(trays => this.trays = trays);
    }

    ngOnInit(): void {
        this.getItems();
    }
}
