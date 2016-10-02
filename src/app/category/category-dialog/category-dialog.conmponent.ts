import { Component } from '@angular/core';
import { MdDialogRef} from '@angular/material';

@Component({
    selector: 'category-dialog',
    template: require('./category-dialog.component.html')
})
export class CategoryDialogComponent {
    category: string;

    constructor(public dialogRef: MdDialogRef<CategoryDialogComponent>) {}

    save() {
        this.dialogRef.close(this.category);
    }
}
