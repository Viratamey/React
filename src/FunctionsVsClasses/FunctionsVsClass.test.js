import { render, screen } from '@testing-library/react';
import FunctionsVsClass from "./FunctionsVsClass";
import React from "react";

test('renders learn react link', () => {
  render(<FunctionsVsClass />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
