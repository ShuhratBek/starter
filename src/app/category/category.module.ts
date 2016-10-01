import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { categoryRouting } from './category.routing';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list';
import { CategoryListItemComponent } from './category-list-item';
import { SubCategoryComponent } from './sub-category.component';
import { SubCategoryListComponent } from './sub-category-list';
import { CategoryService } from './category.service';
import { SubCategoryListItemComponent } from './sub-category-list-item';

import { CategoryDialog } from './category-dialog.conmponent';

@NgModule({
    declarations: [
        CategoryComponent,
        CategoryListComponent,
        CategoryListItemComponent,
        SubCategoryComponent,
        SubCategoryListComponent,
        SubCategoryListItemComponent,
        CategoryDialog
    ],
    imports: [
        categoryRouting,
        SharedModule
    ],
    providers: [CategoryService, CategoryDialog]
})

export class CategoryModule {
}
