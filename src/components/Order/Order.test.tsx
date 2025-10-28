import { render, screen } from '@testing-library/react-native';
import Order from './Order';

describe('Order Componenet test cases', () => {
  test('it should render Order component properly', () => {
    render(<Order />);
    expect(screen.getByText(/order/i)).toBeTruthy();
  });
});
