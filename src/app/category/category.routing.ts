import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

const categoryRoutes: Routes = [
    {
        path: 'category',
        component: CategoryComponent
    }
];

export const categoryRouting: ModuleWithProviders = RouterModule.forChild(categoryRoutes);
