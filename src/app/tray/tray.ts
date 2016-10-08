import { Item } from '../item/item'
import { Company } from '../item/item'

export class Tray {
    id: number;
    company: Company;
    dishes: Array<Item>;
    status: string;
    totalPrice: number;
}
