import React from 'react';
import App from '../App';
import { render ,screen } from "@testing-library/react-native";

test('renders correctly', async () => {
 render(<App />)
  expect(screen.getByText("Everest Canteen")).toBeTruthy();
    
});
