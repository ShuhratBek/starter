import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
    selector: 'nav-bar',
    template: require('./nav-bar.component.html'),
    providers: [MenuService]
})

export class NavbarComponent implements OnInit {
    @Input() sidebarState: boolean;
    menus: Menu[];

    constructor(private menuService: MenuService) { }

    getMenus(): void {
        this.menuService.getMenus().then(menus => this.menus = menus);
    }

    ngOnInit(): void {
        this.getMenus();
    }

    menu() {
        this.sidebarState = !this.sidebarState;
    }
}
