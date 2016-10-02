import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CategoryDialogComponent } from './category-dialog';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import * as _ from 'lodash';

@Component({
    selector: 'category',
    template: require('./category.component.html')
})

export class CategoryComponent implements OnInit {
    categories: Array<Category>;
    dialogRef: MdDialogRef<CategoryDialogComponent>;
    searchOpen: boolean = false;

    constructor(
        private categoryService: CategoryService,
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef
    ) {
    }

    getCategories(): void {
        this.categoryService.getCategories().then(categories => this.categories = categories);
    }

    ngOnInit(): void {
        this.getCategories();
    }

    open() {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(CategoryDialogComponent, config);

        this.dialogRef.afterClosed().subscribe(result => {
            if(!_.isEmpty(result)) {
                this.categories.push({
                    id: 5,
                    name: result,
                    icon: '',
                    items: []
                });
            }
            this.dialogRef = null;
        });
    }

    toggleSearch(): void {
        this.searchOpen = !this.searchOpen;
    }
}
