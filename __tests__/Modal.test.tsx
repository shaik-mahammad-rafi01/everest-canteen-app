import { render, screen } from "@testing-library/react-native";
import Modal from "../src/components/Modal";

describe("Modal test cases" , ()=>{
    test("it should render the model" , ()=>{
        render(<Modal sectionName={""} onClose={function (): void {} } 
        addItem={function (_name: string, _price: number): void {} } />)
        expect(screen.getByText(/Item Name/i)).toBeTruthy();
    })
})