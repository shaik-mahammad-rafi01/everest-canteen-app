import { fireEvent, render, screen } from '@testing-library/react-native';
import CardItem from './ItemCard';

describe('CardItem testcases', () => {
  const mockFunction = jest.fn();
  test('it should render the card item with props', () => {
    render(
      <CardItem
        item={{
          Name: 'Cake',
          Price: 20,
          Image: '',
        }}
        Delete={mockFunction}
      />,
    );
    expect(screen.getByText('Cake')).toBeTruthy();
  });
  test('It should call delete funtion after delete item', () => {
    
    render(
      <CardItem
        item={{
          Name: 'maggie',
          Price: 40,
          Image: '',
        }}
        Delete={mockFunction}
      />,
    );
    expect(screen.getByText('maggie')).toBeTruthy();
    const removeBtn = screen.getByText('Remove');
    fireEvent.press(removeBtn);
    expect(mockFunction).toHaveBeenCalledTimes(1)
    expect(mockFunction).toHaveBeenCalledWith('maggie');

  });
});
