import { fireEvent, render, screen} from "@testing-library/react-native";
import Modal from "../src/components/Modal";
import { Alert } from "react-native";

describe("Modal test cases" , ()=>{
    jest.spyOn(Alert , "alert")
    test("it should render the model" , ()=>{
        render(<Modal sectionName={"Beverages"} onClose={function (): void {} } 
        addItem={function (_name: string, _price: number): void {} } />)
        expect(screen.getByText(/Beverages/i)).toBeTruthy();
    })
    test("is should validate inputs" , ()=>{
        render(<Modal sectionName={"Break fast"} onClose={function (): void {} }
        addItem={function (_name: string, _price: number): void {} } />)
        const inputElement1 = screen.getByPlaceholderText("Enter the item name")
        const addBtn = screen.getByText("Add")
        fireEvent.changeText(inputElement1 , "Tea")
        fireEvent.press(addBtn)
        expect(Alert.alert).toHaveBeenCalledWith("fill all fields") 
    })
    test("it should alert in the price is not valid" , ()=>{
        render(<Modal sectionName={"Beverages"} onClose={function (): void {} } 
        addItem={function (_name: string, _price: number): void {} } />)

        const ItemName = screen.getByPlaceholderText("Enter the item name")
        const PriceInput = screen.getByPlaceholderText("enter the price")
        const addBtn = screen.getByText("Add")
        fireEvent.changeText(ItemName , "milk")
        fireEvent.changeText(PriceInput , "aaa")
        fireEvent.press(addBtn)
        expect(Alert.alert).toHaveBeenCalledWith("invalid price") 
    })
})


