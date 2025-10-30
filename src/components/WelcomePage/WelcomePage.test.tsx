import { render, screen } from '@testing-library/react-native';
import WelcomePage from './WelcomePage';

describe('WelcomePage test cases', () => {
  test('it should render the component properly', () => {
    render(<WelcomePage />);
    const text = screen.getByText('A CANTEEN JUST FOR YOU');
    expect(text).toBeTruthy();
  });
});
