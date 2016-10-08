import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { itemRouting } from './item.routing';
import { ItemComponent } from './item.component';
import { ItemService } from './item.service';

@NgModule({
    declarations: [
        ItemComponent
    ],
    imports: [
        itemRouting,
        SharedModule
    ],
    providers: [ItemService],
    entryComponents: [
        ItemComponent
    ]
})

export class ItemModule {
}
