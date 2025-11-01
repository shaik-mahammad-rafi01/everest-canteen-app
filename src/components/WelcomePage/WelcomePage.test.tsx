import { fireEvent, render, screen } from '@testing-library/react-native';
import WelcomePage from './WelcomePage';

describe('WelcomePage test cases', () => {
  const route = { params: { role: 'User' } };
  const navigation = {navigate : jest.fn()}
  test('it should render the component properly', () => {
    render(<WelcomePage />);
    const text = screen.getByText('A CANTEEN JUST FOR YOU');
    expect(text).toBeTruthy();
  });
  test("it should redirect login after clicking Login as user" , ()=>{
    render(<WelcomePage route={route} navigation={navigation}/>)
    const button  = screen.getByText("LOGIN AS USER");
    fireEvent.press(button);
    expect(navigation.navigate).toHaveBeenCalledWith("Login" , {role : "User"});
  })
});
