import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CategoryDialogComponent } from './category-dialog';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    selector: 'category',
    template: require('./category.component.html')
})

export class CategoryComponent implements OnInit {
    categories: Array<Category>;
    dialogRef: MdDialogRef<CategoryDialogComponent>;
    lastCloseResult: string;

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
            this.lastCloseResult = result;
            this.dialogRef = null;
        });
    }

}
