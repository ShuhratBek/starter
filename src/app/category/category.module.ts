import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { categoryRouting } from './category.routing';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list';
import { CategoryListItemComponent } from './category-list-item';
import { CategoryService } from './category.service';

import { CategoryDialogComponent } from './category-dialog';

@NgModule({
    declarations: [
        CategoryComponent,
        CategoryListComponent,
        CategoryListItemComponent,
        CategoryDialogComponent
    ],
    imports: [
        categoryRouting,
        SharedModule
    ],
    providers: [CategoryService],
    entryComponents: [
        CategoryComponent,
        CategoryDialogComponent
    ]
})

export class CategoryModule {
}
