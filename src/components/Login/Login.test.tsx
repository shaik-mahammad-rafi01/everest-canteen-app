import { render , screen} from "@testing-library/react-native";
import Login from "./Login";

describe("Login page test cases" , ()=>{
  const mockNavigate = jest.fn();
  const mockRoute = (role = 'Admin') => ({ params: { role } });

  test('it should render login screen with role text', () => {
    render(<Login route={mockRoute('User')} navigation={{ navigate: mockNavigate }} />);
    expect(screen.getByText('Sign in as User')).toBeTruthy();
  });

  test("it should render the admin page" , ()=>{
        render(<Login route={mockRoute('Admin')} navigation={{ navigate: mockNavigate }} />);
    expect(screen.getByText('Sign in as Admin')).toBeTruthy();
  })
})