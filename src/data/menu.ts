import { MenuSection } from "../types/menu";
export const CanteenItems :MenuSection[] = [
    {
        FoodType: "Beverages",
        data: [{ id :1 ,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnizjjezTC5vQr8VUA_EwaX4YgfDFN5sAg_A&s", name: "Tea", price: 20, }, { id : 2,image: "https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=w_3000,h_3074,x_0,y_0,c_fill", name: "Coffee", price: 20, }, { id : 3 , image: "https://hamul.coop/wp-content/uploads/2020/09/kidmilk2.jpg", name: "Milk", price: 80 }]
    },
    {
        FoodType: "Breakfast",
        data: [{ id : 1 , image: "https://www.shutterstock.com/image-photo/vegetable-maggi-recipe-tasty-veg-260nw-1597122580.jpg", name: "Maggie", price: 40, }, { id : 2 ,image: "https://ministryofcurry.com/wp-content/uploads/2023/11/Kolkatta-Egg-Roll-4.jpg", name: "Egg Roll", price: 40 }, { id : 3 ,image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg", name: "Egg rice", price: 35 }]
    },
    {
        FoodType: "Main courses",
        data: [{id :1, image: "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe.jpg", name: "Egg Biryani", price: 250 }, { id : 2 ,image: "https://mamanagis.ie/wp-content/uploads/2021/11/Indian-Chapati-Bread.jpg", name: "Chapati", price: 25 }, { id :3 , image: "https://eatsimplefood.com/wp-content/uploads/2020/04/Indian-Curry-Chicken-Recipe-1200-EatSimpleFood.com_.jpg", name: "Panner curry", price: 230 }]
    },
    {
        FoodType: "Snacks",
        data: [{ id : 1 ,image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/mirchi-bajji-mirapakaya-bajji-recipe.webp", name: "Bajji", price: 50 }, { id : 2 ,image: "https://ministryofcurry.com/wp-content/uploads/2025/08/samosa-6.jpg", name: "Samosa", price: 25 }, { id : 3 ,image: "https://www.cookeatworld.com/wp-content/uploads/2023/12/Onion-Pakoda-1.jpg", name: "Onion pakoda", price: 20 }]
    },
    {
        FoodType: "Desserts",
        data: [{ id : 1 ,image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11-500x375.jpg", name: "Ice cream", price: 120, }, { id : 2 ,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTyy1twaWcho6CLm46WzF5WKyf33bQrI3FqT7tg8ZKyQxlIVC3hFOpRJyhixx0fgo_74&usqp=CAU", name: "Cup cake", price: 75 }, { id : 3 ,image: "https://chopnotch.com/wp-content/uploads/2020/11/Panna-Cotta-1.jpg", name: "straberry", price: 160 }]
    },
];