import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from "react";
import App from '../components/App.js';

test('renders title', () => {
  render(<App />);
  const headerElement = screen.getByText("NextEra Calculations");
  expect(headerElement).toBeInTheDocument();
});