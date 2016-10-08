import {Component, OnInit} from '@angular/core';

import { Category } from '../../category/category';

@Component({
    selector: 'dish-list',
    template: require('./dish-list.component.html')
})
export class DishList implements OnInit{

    categories: Array<Category>;
    categoryName = 'test';

    ngOnInit(): void {
        this.categories = [];
        let categoriesNameMock = ['Салаты', 'Первые блюда', 'Вторые блюда', 'Гарниры'];
        for (let i = 0; i < 5; i++){
            let category = new Category();
            category.id = i;
            category.name = categoriesNameMock[i];
            this.categories.push(category);
        }
    }

}
