import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import HomePage from '../../client/src/HomePage';

test('Home container should render', () => {
  render(<HomePage />);
  const homePageElement = screen.getByTestId('homeContainer');
  expect(homePageElement).toBeInTheDocument();
});
