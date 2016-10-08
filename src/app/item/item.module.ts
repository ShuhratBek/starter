import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { itemRouting } from './item.routing';
import { ItemComponent } from './item.component';
import { ItemService } from './item.service';
import {SearchFilterPipe} from "./searchFilter";

import { ItemDialogComponent } from './item-dialog';
import {CategoryService} from "../category/category.service";
import {CompanyService} from "./company.service";

@NgModule({
    declarations: [
        ItemComponent,
        ItemDialogComponent,
        SearchFilterPipe
    ],
    imports: [
        itemRouting,
        SharedModule
    ],
    providers: [
        ItemService,
        CategoryService,
        CompanyService
    ],
    entryComponents: [
        ItemComponent,
        ItemDialogComponent
    ]
})

export class ItemModule {
}
