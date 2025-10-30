import { render, screen } from '@testing-library/react-native';
import Register from './Register';

test('renders Register', () => {
  const route = { params: { role: 'User' } };
  const navigation = jest.fn();

  render(<Register route={route} navigation={navigation} />);
  expect(screen.getByText('Sign Up as User')).toBeTruthy();
});
