import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Team from '../../client/src/Team';

xtest('Should render Navbar component', () => {
  render(<Team />);
  const teamElement = screen.getByTestId('team');
  expect(teamElement).toBeInTheDocument();
});
