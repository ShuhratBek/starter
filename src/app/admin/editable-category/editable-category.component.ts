import { Component, Input } from '@angular/core';

@Component({
    selector: 'editable-category',
    template: require('./editable-category.component.html')
})
export class EditableCategory{
    @Input() categoryId: number;
    @Input() categoryName: string;
}
