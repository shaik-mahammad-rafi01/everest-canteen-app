export interface MenuItem {
    
    id: number;
    image: string,
    name: string,
    price: number

}

export interface MenuSection {
    FoodType: string,
    data: MenuItem[]
}

export interface Admin {
    UserName: string,
    Password: string
}
export type User = {
    userName: string;
    password: string
};