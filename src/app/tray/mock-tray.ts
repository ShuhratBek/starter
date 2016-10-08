import { Tray } from './tray';
import { Items } from '../item/mock-item';
import * as _ from 'lodash'

export let Trays: Tray[] = [{
    id: 1,
    company: {
        id: 1,
        name: 'Браво',
        image: ''
    },
    items: Items,
    status: 'PENDING',
    totalPrice: _.sumBy(Items, i => i.price)
}];
