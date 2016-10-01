import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogRef} from '@angular/material';

@Component({
    selector: 'category-dialog',
    template: require('./category-dialog.component.html')
})
export class CategoryDialogComponent {
    constructor(public dialogRef: MdDialogRef<CategoryDialogComponent>) { }
}
