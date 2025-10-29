import { fireEvent, render, screen } from '@testing-library/react-native';
import { TabNavigations } from './TabNavigation';

describe('TabNavigation component testcases', () => {
  test('it should render the tab navigation properly', () => {
    render(<TabNavigations />);
    const tab = screen.getByText(/Order/i);
    fireEvent.press(tab);
    expect(screen.getByText).toBeTruthy();
  });
  test('it should switch screen from order to menu', () => {
    render(<TabNavigations />);
    const tab = screen.getByText(/Order/i);
    fireEvent.press(tab);
    expect(screen.getByText).toBeTruthy();

    const menu = screen.getByText(/Menu/i);
    fireEvent.press(menu);
    expect(screen.getByText(/Everest Canteen/i)).toBeTruthy();
  });
});
