import {Component, OnInit} from '@angular/core';

import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    providers: [MenuService]
})

export class AppComponent implements OnInit {
    menus: Menu[];

    constructor(private menuService: MenuService) { }

    getMenus(): void {
        this.menuService.getMenus().then(menus => this.menus = menus);
    }

    ngOnInit(): void {
        this.getMenus();
        console.log('AppComponent initializing...');
    }
}
