import { render, screen } from '@testing-library/react-native';
import CardItem from '../src/components/ItemCard';

describe('CardItem testcases', () => {
  test('it should render the card item with props', () => {
    render(
      <CardItem
        item={{
          Name: 'Cake',
          Price: 20,
          Image: '',
        }}
        Delete={function (_itemName: string): void {}}
      />,
    );
    expect(screen.getByText('Cake')).toBeTruthy();
  });
});
