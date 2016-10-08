import { Injectable } from '@angular/core';
import { Item } from './item';
import { Items } from './mock-item';
import * as _ from 'lodash';

@Injectable()
export class ItemService {
    getItems(): Promise<Item[]> {
        return Promise.resolve(Items);
    }
}
