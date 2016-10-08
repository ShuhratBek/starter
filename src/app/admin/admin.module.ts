import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { AdminComponent } from './admin.component';
import { adminRouting } from './admin.routing';
import { DishList } from './dish-list/dish-list.component';
import { EditableCategory } from './editable-category/editable-category.component';

@NgModule({
    declarations: [
        AdminComponent,
        DishList,
        EditableCategory
    ],
    imports: [
        adminRouting,
        SharedModule
    ],
    providers: []
})

export class AdminModule {
}
