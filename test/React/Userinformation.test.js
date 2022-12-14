import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import UserInformation from '../../client/src/UserInformation';

test('it should render the UserInformation component', () => {
  render(<UserInformation />);
  const userInformation = screen.getByTestId('userInformation');
  expect(userInformation).toBeInTheDocument();
});
