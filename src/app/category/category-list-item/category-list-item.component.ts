import { Component, Input } from '@angular/core';
import { Category } from '../category';

@Component({
    selector: 'category-list-item',
    template: require('./category-list-item.component.html')
})

export class CategoryListItemComponent {
    @Input() items: Category[];
}
