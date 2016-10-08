import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { trayRouting } from './tray.routing';
import { TrayComponent } from './tray.component';
import { TrayService } from './tray.service'

@NgModule({
    declarations: [
        TrayComponent
    ],
    imports: [
        trayRouting,
        SharedModule
    ],
    providers: [TrayService],
    entryComponents: [
        TrayComponent
    ]
})

export class TrayModule {
}
