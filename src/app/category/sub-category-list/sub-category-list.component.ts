import { Component, Input } from '@angular/core';
import { Category } from '../category';

@Component({
    selector: 'sub-category-list',
    template: require('./sub-category-list.component.html')
})

export class SubCategoryListComponent {
    @Input() items: Category[];
}
