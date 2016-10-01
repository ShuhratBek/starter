import { Component, Input } from '@angular/core';
import { Category } from '../category';

@Component({
    selector: 'sub-category-list-item',
    template: require('./sub-category-list-item.component.html')
})

export class SubCategoryListItemComponent {
    @Input() items: Category[];
}
