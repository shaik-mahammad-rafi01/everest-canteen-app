import { fireEvent, render, screen } from '@testing-library/react-native';
import Register from './Register';
import { Alert } from 'react-native';
describe('Register page test cases', () => {
  const route = { params: { role: 'User' } };
  const navigation = {navigate : jest.fn()}
  const mockAlert = jest.spyOn(Alert, 'alert');
  test('renders Register', () => {
    render(<Register route={route} navigation={navigation} />);
    expect(screen.getByText('Sign Up as User')).toBeTruthy();
  });

  test('It should alert when input fields are empty', () => {
    render(<Register route={'User'} navigation={navigation}/>)
        fireEvent.changeText(screen.getByPlaceholderText('Enter your name'), '');
        fireEvent.changeText(screen.getByPlaceholderText('Enter your password'), '');
        fireEvent.changeText(screen.getByPlaceholderText('Confirm your password'), '');
        fireEvent.press(screen.getByText("SIGN UP"));
        expect(mockAlert).toHaveBeenCalledWith("Please fill all fields")
  });
    test('It should redict to Login after register', () => {
    render(<Register route={route} navigation={navigation}/>)
        fireEvent.changeText(screen.getByPlaceholderText('Enter your name'), 'rafi');
        fireEvent.changeText(screen.getByPlaceholderText('Enter your password'), '1234');
        fireEvent.changeText(screen.getByPlaceholderText('Confirm your password'), '1234');
        fireEvent.press(screen.getByText("SIGN UP"));
        expect(navigation.navigate).toHaveBeenCalledWith("Login" , {role : "User"})
        expect(screen.getByText("SIGN IN")).toBeTruthy();
  });
});
