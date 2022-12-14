import React from 'react';
import { render, simulate } from '@testing-library/react';
import LoginPage from '../../client/src/LoginPage.jsx';

test('User form submits a name and password', () => {
  const { getByLabelText, getByText } = render(<LoginPage />);

  const name = getByLabelText('userNameLogin');
  const password = getByLabelText('userPasswordLogin');
  const submitButton = getByText('userButton');
});
