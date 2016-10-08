import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ItemDialogComponent } from './item-dialog';
import { Item } from './item';
import { ItemService } from './item.service';
import * as _ from 'lodash';
import * as Rx from 'rxjs';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    selector: 'item',
    template: require('./item.component.html'),
    styles: [require('./item.component.scss')]
})

export class ItemComponent implements OnInit {
    items: Array<Item>;
    searchItem: string = '';
    searchOpen: boolean = false;
    filterOpen: boolean = false;
    dialogRef: MdDialogRef<ItemDialogComponent>;

    constructor(
        private itemService: ItemService,
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef
    ) {
    }

    getItems(): void {
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    toggleSearch(): void {
        if(this.searchOpen){
            this.search = '';
        }
        this.searchOpen = !this.searchOpen;
    }

    toggleFilter(): void {
        this.filterOpen = !this.filterOpen;
    }

    open() {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(ItemDialogComponent, config);

        this.dialogRef.afterClosed().subscribe(result => {});
    }
}
