import { fireEvent, render, screen } from '@testing-library/react-native';
import Register from './Register';
import { Alert } from 'react-native';
describe('Register page test cases', () => {
  const route = { params: { role: 'User' } };
  const navigation = jest.fn();
  const mockAlert = jest.spyOn(Alert, 'alert');
  test('renders Register', () => {
    render(<Register route={route} navigation={navigation} />);
    expect(screen.getByText('Sign Up as User')).toBeTruthy();
  });

  test('It should alert when input fields are empty', () => {
    render(<Register route={'Admin'} navigation={navigation}/>)
        fireEvent.changeText(screen.getByPlaceholderText('Enter your name'), '');
        fireEvent.changeText(screen.getByPlaceholderText('Enter your password'), '');
        fireEvent.changeText(screen.getByPlaceholderText('Confirm your password'), '');
        fireEvent.press(screen.getByText("SIGN UP"));
        expect(mockAlert).toHaveBeenCalledWith("Please fill all fields")
  });
});
