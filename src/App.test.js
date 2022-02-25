import { render, screen } from '@testing-library/react';
import React, { Component } from "react";
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText("NextEra Calculations Dashboard");
  expect(linkElement).toBeInTheDocument();
});
