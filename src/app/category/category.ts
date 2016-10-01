export interface Category {
    id: number;
    name: string;
    icon: string;
    items: Array<Category>;
}
