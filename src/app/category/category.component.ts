import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CategoryDialog } from './category-dialog.conmponent';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    selector: 'category',
    template: require('./category.component.html'),
    providers: [CategoryDialog]
})

export class CategoryComponent implements OnInit {
    categories: Array<Category>;
    dialogRef: MdDialogRef<CategoryDialog>;
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

        this.dialogRef = this.dialog.open(CategoryDialog, config);

        this.dialogRef.afterClosed().subscribe(result => {
            this.lastCloseResult = result;
            this.dialogRef = null;
        });
    }
}
