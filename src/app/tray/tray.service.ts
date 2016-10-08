import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { Tray } from './tray';
import { TRAY } from './mock-tray';

@Injectable()
export class TrayService {
    // data: Observable<Array<Dish>>;
    // private dataObserver: Observer<Array<any>>;
    //
    constructor() {

        //     this.data = new Observable(observer => this.dataObserver = observer);
        //     this.dataObserver.next(DISHES);
    }

    getTray(): Promise<Tray> {
        return Promise.resolve(TRAY);
    }

    removeDish(dish: Dish): boolean {
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
