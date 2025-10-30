import { fireEvent, render, screen } from '@testing-library/react-native';
import { TabNavigations } from './TabNavigation';

describe('TabNavigation component testcases', () => {
  test('it should render the tab navigation properly', () => {
    render(<TabNavigations />);
    const tab = screen.getByText("Order");
    fireEvent.press(tab);
    expect(screen.getByText("No Orders yet")).toBeTruthy();
  });
  test('it should switch screen from order to canteen menu', () => {
    render(<TabNavigations />);
    const tab = screen.getByText("Order");
    fireEvent.press(tab);
    expect(screen.getByText("No Orders yet")).toBeTruthy();

    const menu = screen.getByText("Canteen Menu");
    fireEvent.press(menu);
    expect(screen.getByText(/Everest Canteen/i)).toBeTruthy();
  });
});
