import { fireEvent, render, screen } from '@testing-library/react-native';
import Modal from './Modal';
import { Alert } from 'react-native';

describe('Modal test cases', () => {
  jest.spyOn(Alert, 'alert');

  const mockFunction = jest.fn();
  test('it should render the model', () => {
    render(
      <Modal
        sectionName={'Beverages'}
        onClose={function (): void {}}
        addItem={mockFunction}
      />,
    );
    expect(screen.getByText(/Beverages/i)).toBeTruthy();
  });
  test('is should validate inputs', () => {
    render(
      <Modal
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
      <Modal
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
      <Modal
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
      <Modal
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
