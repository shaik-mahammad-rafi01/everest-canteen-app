export interface MenuItem  {
    Image : string,
    Name : string,
    Price: string

}

export interface MenuSection {
    FoodType : string,
    data : MenuItem[]
}