import { fireEvent, render, screen } from '@testing-library/react-native';
import ModalMenu from './Modal';
import { Alert } from 'react-native';

describe('Modal test cases', () => {
  jest.spyOn(Alert, 'alert');

  const mockFunction = jest.fn();
  test('it should render the model', () => {
    render(
      <ModalMenu
        sectionName={'Beverages'}
        onClose={function (): void {}}
        addItem={mockFunction}
      />,
    );
    expect(screen.getByText(/Beverages/i)).toBeTruthy();
  });
  test('is should validate inputs', () => {
    render(
      <ModalMenu
        sectionName={'Break fast'}
        onClose={mockFunction}
        addItem={mockFunction}
      />,
    );
    const inputElement1 = screen.getByPlaceholderText('Enter the item name');
    const addBtn = screen.getByText('Add');
    fireEvent.changeText(inputElement1, 'Tea');
    fireEvent.press(addBtn);
    expect(Alert.alert).toHaveBeenCalledWith('fill all fields');
  });
  test('it should alert in the price is not valid', () => {
    render(
      <ModalMenu
        sectionName={'Beverages'}
        onClose={mockFunction}
        addItem={mockFunction}
      />,
    );

    const ItemName = screen.getByPlaceholderText('Enter the item name');
    const PriceInput = screen.getByPlaceholderText('enter the price');
    const addBtn = screen.getByText('Add');
    fireEvent.changeText(ItemName, 'milk');
    fireEvent.changeText(PriceInput, 'aaa');
    fireEvent.press(addBtn);
    expect(Alert.alert).toHaveBeenCalledWith('invalid price');
  });
  test('it should alert if the price amount is zero', () => {
    render(
      <ModalMenu
        sectionName={'snack'}
        onClose={mockFunction}
        addItem={mockFunction}
      />,
    );

    const ItemName = screen.getByPlaceholderText('Enter the item name');
    const PriceInput = screen.getByPlaceholderText('enter the price');
    const addBtn = screen.getByText('Add');
    fireEvent.changeText(ItemName, 'milk');
    fireEvent.changeText(PriceInput, 0);
    fireEvent.press(addBtn);
    expect(Alert.alert).toHaveBeenCalledWith('invalid price');
  });
  test('it should alert if the price amount is negative', () => {
    render(
      <ModalMenu
        sectionName={'Breakfast'}
        onClose={mockFunction}
        addItem={mockFunction}
      />,
    );
    const ItemName = screen.getByPlaceholderText('Enter the item name');
    const PriceInput = screen.getByPlaceholderText('enter the price');
    const addBtn = screen.getByText('Add');
    fireEvent.changeText(ItemName, 'upma');
    fireEvent.changeText(PriceInput, -20);
    fireEvent.press(addBtn);
    expect(Alert.alert).toHaveBeenCalledWith('invalid price');
  });
});
