import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { AdminComponent } from './admin.component';
import { adminRouting } from './admin.routing';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        adminRouting,
        SharedModule
    ],
    providers: []
})

export class AdminModule {
}
