import { Tray } from './tray';

export let TRAY: Tray = {
    id: 1,
    company: {
        id: 1,
        name: 'Браво',
        image: ''
    },
    dishes: [
        {
            id: 1,
            name: 'БОРШЧ',
            icon: '',
            ingredients: 'с капусткой но не красный',
            price: 1.23
        },
        {
            id: 2,
            name: 'САЛАТ',
            icon: '',
            ingredients: 'вкусный, с ананасами',
            price: 45.67
        }
    ],
    status: 'PENDING',
    totalPrice: 123
};
