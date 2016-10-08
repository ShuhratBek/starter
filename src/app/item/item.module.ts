import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { itemRouting } from './item.routing';
import { ItemComponent } from './item.component';
import { ItemService } from './item.service';

import { ItemDialogComponent } from './item-dialog';

@NgModule({
    declarations: [
        ItemComponent,
        ItemDialogComponent
    ],
    imports: [
        itemRouting,
        SharedModule
    ],
    providers: [ItemService],
    entryComponents: [
        ItemComponent,
        ItemDialogComponent
    ]
})

export class ItemModule {
}
