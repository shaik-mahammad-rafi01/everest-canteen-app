import { fireEvent, render , screen} from "@testing-library/react-native";
import Login from "./Login";
import { Alert } from "react-native";

describe("Login page test cases" , ()=>{
  const mockNavigate = jest.fn();
  const mockRoute = (role = 'Admin') => ({ params: { role } });
  const mockAlert = jest.spyOn(Alert, 'alert');

  test('it should render login screen with role text', () => {
    render(<Login route={mockRoute('User')} navigation={{ navigate: mockNavigate }} />);
    expect(screen.getByText('Sign in as User')).toBeTruthy();
  });

  test("it should render the admin page" , ()=>{
        render(<Login route={mockRoute('Admin')} navigation={{ navigate: mockNavigate }} />);
    expect(screen.getByText('Sign in as Admin')).toBeTruthy();
  })

  test("it should alert when click signIn with empty fields" , ()=>{
     render(<Login route={mockRoute('Admin')} navigation={{ navigate: mockNavigate }} />);
    const button = screen.getByText("SIGN IN")
    fireEvent.press(button)
    expect(mockAlert).toHaveBeenCalledWith("Please fill username and password")
  })
})