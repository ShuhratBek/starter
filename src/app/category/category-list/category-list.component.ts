import { Component, Input } from '@angular/core';
import { Category } from '../category';

@Component({
    selector: 'category-list',
    template: require('./category-list.component.html')
})

export class CategoryListComponent {
    @Input() items: Category[];
}
