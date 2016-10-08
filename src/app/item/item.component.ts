import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ItemDialogComponent } from './item-dialog';
import {Item, Company} from './item';
import { ItemService } from './item.service';
import { TrayService } from '../tray/tray.service';
import * as _ from 'lodash';
import * as Rx from 'rxjs';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import {CategoryService} from "../category/category.service";
import {Category} from "../category/category";
import {CompanyService} from "./company.service";

@Component({
    selector: 'item',
    template: require('./item.component.html'),
    styles: [require('./item.component.scss')]
})

export class ItemComponent implements OnInit {
    categories: Array<Category>;
    selectedCategoryId: number = 5;
    companies: Array<Company>;
    selectedCompanyId: number = 1;
    items: Array<Item>;
    search: string = '';
    searchOpen: boolean = false;
    filterOpen: boolean = false;
    dialogRef: MdDialogRef<ItemDialogComponent>;

    constructor(
        private categoryService: CategoryService,
        private itemService: ItemService,
        private companyService: CompanyService,
        private trayService: TrayService,
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef
    ) {
    }

    getCompanies(): void {
        this.companyService.getCompanies()
            .then(companies => this.companies = companies);
    }

    getCategories(): void {
        this.categoryService.getCategories()
            .then(categories => this.categories = categories);
    }

    getItems(): void {
        this.itemService.getItems()
            .then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
        this.getCategories();
        this.getCompanies();
    }

    toggleSearch(): void {
        if(this.searchOpen){
            this.search = '';
            this.selectedCategoryId = 0;
            this.selectedCompanyId = 0;
        }
        this.searchOpen = !this.searchOpen;
    }

    toggleFilter(): void {
        this.filterOpen = !this.filterOpen;
    }

    open(item: Item): void {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(ItemDialogComponent, config);

        this.dialogRef.afterClosed().subscribe(result => {
            this.trayService.add(item);
        });
    }
}
