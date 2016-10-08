import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './mock-dishes';
import * as _ from 'lodash';

@Injectable()
export class TrayService {
    // data: Observable<Array<Dish>>;
    // private dataObserver: Observer<Array<any>>;
    //
    constructor() {

        //     this.data = new Observable(observer => this.dataObserver = observer);
        //     this.dataObserver.next(DISHES);
    }

    getDishes(): Promise<Dish[]> {
        return Promise.resolve(DISHES);
        //     return Rx.Observable.from(DISHES);
    }

    removeDish(dish): boolean {
        return false;
    }

    // getCategory(id: number): Promise<Dish[]> {
    //     return this.getDishes()
    //         .then(dishes =>
    //             _.find(dishes, _.flow(
    //                 _.property('items'),
    //                 _.partialRight(_.some, { id: id })
    //             )));
    // }
}
