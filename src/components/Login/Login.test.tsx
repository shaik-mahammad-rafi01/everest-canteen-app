import { render , screen} from "@testing-library/react-native";
import Login from "./Login";

describe("Login page test cases" , ()=>{
    test("it should render Login page properly" , ()=>{
        render(<Login />)
        const loginText = screen.getByText("Sign in your account")
        expect(loginText).toBeTruthy()
    })
})