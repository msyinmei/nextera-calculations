import '@testing-library/jest-dom';
import { findByText, render} from '@testing-library/react';
import React from "react";
import Dashboard from '../components/Dashboard.js';

test('renders title of dashboard', async () => {
  render(<Dashboard />);
  const linkElement = await findByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});
