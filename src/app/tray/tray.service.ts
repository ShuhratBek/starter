import { Injectable } from '@angular/core';
import { Item } from '../item/item';
import { Tray } from './tray';
import { Trays } from './mock-tray';

import * as _ from 'lodash';

@Injectable()
export class TrayService {
    constructor() {}

    getItems(): Promise<Tray[]> {
        return Promise.resolve(Trays);
    }

    removeDish(item: Item): boolean {
        return false;
    }

    add(item: Item): void {
        Trays[0].items.push(item);
    }
}
