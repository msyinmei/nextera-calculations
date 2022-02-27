import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from "react";
import Dashboard from '../components/Dashboard.js';

test('renders title', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});
