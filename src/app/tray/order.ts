import { Dish } from './dish'

export class Order {
    id: number;
    name: string;
    dishes: Array<Dish>;
}
