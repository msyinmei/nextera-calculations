import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from "react";
import App from '../components/App.js';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText("NextEra Calculations");
  expect(linkElement).toBeInTheDocument();
});

test('has dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
})
