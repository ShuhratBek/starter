import { Component } from '@angular/core';
import { MdDialogRef} from '@angular/material';

@Component({
    selector: 'item-dialog',
    template: require('./item-dialog.component.html')
})
export class ItemDialogComponent {
    item: string;
    
    constructor(public dialogRef: MdDialogRef<ItemDialogComponent>) {}

    save() {
        this.dialogRef.close(this.item);
    }
}
