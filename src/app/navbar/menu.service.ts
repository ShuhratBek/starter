import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENUS } from './mock-menu';

@Injectable()
export class MenuService {
    getMenus(): Promise<Menu[]> {
        return Promise.resolve(MENUS);
    }
}
