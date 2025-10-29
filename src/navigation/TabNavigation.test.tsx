import { fireEvent, render, screen } from '@testing-library/react-native';
import { TabNavigations } from './TabNavigation';

describe('TabNavigation component testcases', () => {
  test('it should render the tab navigation properly', () => {
    render(<TabNavigations />);
    const tab = screen.getByText(/Order/i);
    fireEvent.press(tab);
    expect(screen.getByText).toBeTruthy();
  });
});
