import { Tray } from './tray';
import { Item } from '../item/item';
import { Items } from '../item/mock-item';
import * as _ from 'lodash'

export let TRAY: Tray = {
    id: 1,
    company: {
        id: 1,
        name: 'Браво',
        image: ''
    },
    dishes: Items,
    status: 'PENDING',
    totalPrice: _.sumBy(Items, i => i.price)
};
