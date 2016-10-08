import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import * as _ from 'lodash';

@Component({
    selector: 'item',
    template: require('./item.component.html'),
    styles: [require('./item.component.scss')]
})

export class ItemComponent implements OnInit {
    items: Array<Item>;
    search: string = '';
    searchOpen: boolean = false;
    filterOpen: boolean = false;
    constructor(
        private itemService: ItemService
    ) {
    }

    getItems(): void {
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    toggleSearch(): void {
        this.searchOpen = !this.searchOpen;
    }

    toggleFilter(): void {
        this.filterOpen = !this.filterOpen;
    }
}
