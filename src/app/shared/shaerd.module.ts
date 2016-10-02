import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { ValuesPipe } from './values.pipe';

@NgModule({
    declarations: [
        ValuesPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ValuesPipe
    ]
})
export class SharedModule {}
