export interface MenuItem {
    Image: string,
    Name: string,
    Price: number

}

export interface MenuSection {
    FoodType: string,
    data: MenuItem[]
}

export interface Admin {
    UserName : string,
    Password : string
}