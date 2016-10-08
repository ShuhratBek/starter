import { Component, OnInit } from '@angular/core';
import { TrayService } from './tray.service'
import { Dish } from './dish'
import * as _ from 'lodash';

@Component({
    selector: 'tray',
    template: require('./tray.component.html')
})

export class TrayComponent {
    dishes: Array<Dish>;
    totalPrice: number;

    constructor(
        private trayService: TrayService,
    ) {

    }

    getDishes(): Promise<Dish[]> {
        return this.trayService.getDishes()
            .then(dishes => this.dishes = dishes);
    }

    getTotalPrice(): void {
        this.totalPrice = _.sumBy(this.dishes, d => d.price)
    }

    ngOnInit(): void {
        this.getDishes()
            .then(() => this.getTotalPrice());
    }
}
