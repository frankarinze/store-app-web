export interface Item {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
    tag: string;
    featured?: boolean;
    details?: Details ;
}

export interface ProductItemProps {
    tag?: string;
    children?: JSX.Element;
    img?: any;
    category?: string;
    name?: string;
    price?: number;
    onClick?: any;
}

export interface State {
    showCart: boolean;
    cartItems: Item[],
}
export interface Action {
    type: string;
    payload: Item;
}
export interface Details {
    description?: any;
}

export interface HeaderProps {
    onClick?: any;
    productTitle?: string;
    img?: any;
    category?: string;
    details?: Details;
}
export interface Cart {
    showCart?: boolean;
    cartItems?: Item[];
    showHideCart?: any;
    removeItem?: any;
    addToCart?: any;
    clearCart?: any;
}
export interface DropDown {
    sortRangeOne?: any;
    sortRangeTwo?: any;
    resetSort?: any;
}