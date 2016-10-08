import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrayComponent } from './tray.component';

const trayRoutes: Routes = [
    {
        path: 'tray',
        component: TrayComponent
    }
];

export const trayRouting: ModuleWithProviders = RouterModule.forChild(trayRoutes);
