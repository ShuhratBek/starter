import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { SubCategoryComponent } from './sub-category.component';

const categoryRoutes: Routes = [
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'category/:id',
        component: SubCategoryComponent
    }
];

export const categoryRouting: ModuleWithProviders = RouterModule.forChild(categoryRoutes);
