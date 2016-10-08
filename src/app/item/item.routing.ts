import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';

const categoryRoutes: Routes = [
    {
        path: 'item',
        component: ItemComponent
    }
];

export const itemRouting: ModuleWithProviders = RouterModule.forChild(categoryRoutes);
