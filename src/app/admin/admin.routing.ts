import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
