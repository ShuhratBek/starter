import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { itemRouting } from './item.routing';
import { ItemComponent } from './item.component';

@NgModule({
    declarations: [
        ItemComponent
    ],
    imports: [
        itemRouting,
        SharedModule
    ],
    entryComponents: [
        ItemComponent
    ]
})

export class ItemModule {
}
