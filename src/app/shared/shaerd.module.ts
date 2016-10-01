import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MaterialModule,
    MdIconRegistry
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot()
    ],
    exports: [
        CommonModule,
        MaterialModule
    ]
})
export class SharedModule {}
