import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-category';
import * as _ from 'lodash';

@Injectable()
export class CategoryService {
    // data: Observable<Array<Category>>;
    // private dataObserver: Observer<Array<any>>;
    //
    constructor() {

    //     this.data = new Observable(observer => this.dataObserver = observer);
    //     this.dataObserver.next(CATEGORIES);
    }

    getCategories(): Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    //     return Rx.Observable.from(CATEGORIES);
    }
    //
    getCategory(id: number): Promise<Category[]> {
        return this.getCategories()
            .then(categories =>
                _.find(categories, _.flow(
                    _.property('items'),
                    _.partialRight(_.some, { id: id })
                )));
    }
}
