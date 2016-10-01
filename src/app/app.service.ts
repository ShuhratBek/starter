import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    sidebarOpened: boolean = true;

    toggleSidebar() {
        this.sidebarOpened = !this.sidebarOpened;
    }
}
