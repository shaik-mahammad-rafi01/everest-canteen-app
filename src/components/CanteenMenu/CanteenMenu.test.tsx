import { render, screen, userEvent } from '@testing-library/react-native';
import CanteenMenu from './CanteenMenu';

describe('Canteen test cases', () => {
  test('it should render canteen menu items', () => {
    render(<CanteenMenu />);
    expect(screen.getByText('Beverages')).toBeTruthy();
  });
  test('it should open modal properly', async () => {
    render(<CanteenMenu />);
    const user = userEvent.setup();
    const addBtns = await screen.getAllByText('Add');
    await user.press(addBtns[0]);
    const text = screen.getByText(/Cancel/i);
    expect(text).toBeTruthy();
  });
});
