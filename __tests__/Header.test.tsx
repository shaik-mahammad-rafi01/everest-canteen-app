import React from "react";
import { render, screen } from "@testing-library/react-native";
import Header from "../src/components/Header";

test("renders correctly", () => {
  render(<Header />);
  expect(screen.getByText(/Everest Canteen 🍲/i)).toBeTruthy();
});
