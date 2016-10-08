import { Item } from '../item/item'
import { Company } from '../item/item'

export class Tray {
    id: number;
    company: Company;
    items: Array<Item>;
    status: string;
    totalPrice: number;
}
