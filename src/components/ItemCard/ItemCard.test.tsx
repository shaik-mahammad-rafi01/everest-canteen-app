import { fireEvent, render, screen } from '@testing-library/react-native';
import CardItem from './ItemCard';

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
  test("It should call delete funtion after delete item" , ()=>{
    const Delete = jest.fn()
    render(<CardItem item={{
        Name: 'maggie',
        Price: 40,
        Image: ''
    }} Delete={Delete} />)
    expect(screen.getByText('maggie')).toBeTruthy();
    const removeBtn = screen.getByText("Remove")
    fireEvent.press(removeBtn)
    expect(Delete).toHaveBeenCalledWith("maggie");
  })
  
});
