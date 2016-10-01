import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogRef} from '@angular/material';

@Component({
    selector: 'category-dialog',
    template: `
  <p>It's Jazz!</p>
  <p><label>How much? <input #howMuch></label></p>
  <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
})
export class CategoryDialog {
    constructor(public dialogRef: MdDialogRef<CategoryDialog>) { }
}
