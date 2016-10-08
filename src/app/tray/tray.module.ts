import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { trayRouting } from './tray.routing';
import { TrayComponent } from './tray.component';

@NgModule({
    declarations: [
        TrayComponent
    ],
    imports: [
        trayRouting,
        SharedModule
    ],
    entryComponents: [
        TrayComponent
    ]
})

export class TrayModule {
}
