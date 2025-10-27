import { render, screen } from "@testing-library/react-native";
import Canteen from "../src/components/Canteen";

describe("Canteen test cases" , ()=>{
    test("it should render canteen menu items" , ()=>{
        render(<Canteen />)
        expect(screen.getByText("Beverages")).toBeTruthy();
    })
})