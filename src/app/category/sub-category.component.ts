import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
    selector: 'sub-category',
    template: require('./sub-category.component.html')
})

export class SubCategoryComponent implements OnInit {
    public categories: Category[];

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private _location: Location
    ) {
    }

    getCategories(): void {
        // this.categoryService.getCategories().then(categories => this.categories = categories);
        // this.categoryService.data.map((item) => item.id === id).subscribe(result => {
        //     this.categories = result;
        // }, error => console.log('Could not load artists'));
    }

    ngOnInit(): void {
        // this.getCategories();
        let id: number;
        this.route.params.forEach((params: Params) => {
            id = +params['id'];
            this.categoryService.getCategory(id).then(categories => this.categories = categories);
            // this.categoryService.getCategories()
            //     .then(categories => this.categories = categories.filter(category => category.id == id)[0]);
            // this.categoryService.data.filter((item) => item.id == id).subscribe(result => {
            //     this.categories = result;
            // }, error => console.log('Could not load artists'));
        });
    }

    back(): void {
        this._location.back();
    }
}
