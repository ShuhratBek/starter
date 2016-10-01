export interface Category {
    id: number;
    name: string;
    icon: string;
    items: Array<Category>;
}
export class SubCategory {
    id: number;
    name: string;
    icon: string;
    items: Array<Category>;
}
