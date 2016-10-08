import { Dish } from './dish'
import { Company } from '../item/item'

export class Tray {
    id: number;
    company: Company;
    dishes: Array<Dish>;
    status: string;
    totalPrice: number;
}
