import { Category } from '../category/category';
export class Company {
    id: number;
    name: string;
    image: string;
}

export class Item {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    options: string;
    category: Category;
    company: Company;
    weight: number;
}
