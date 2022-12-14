import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../../client/src/NavBar';

test('Should render Navbar component', () => {
  render(<NavBar />);
  const navBarElement = screen.getByTestId('navbar');
  expect(navBarElement).toBeInTheDocument();
});
