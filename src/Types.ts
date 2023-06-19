export interface IProduct {
    title: string;
    image: string;
    id: number;
    price: number;
    quantity?: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface ISlider {
    img: string;
    subTitle: string;
    title: string;
    btn: string;
    id: number;
};

export interface IUser {
    displayName: string;
    email: string;
    photoURL: string;
};

export interface IBookedProduct {
    id: number;
    quantity: number
    image: string
    price: number
    title: string
    description: string,
    color: string
}