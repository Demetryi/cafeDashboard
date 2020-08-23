import React from 'react';
import App from '../pages';
import {render} from '@testing-library/react';

it('renders correctly', () => {
  const {getByTestId} = render(<App />);
  const element = getByTestId('text');
  expect(element).toBeDefined();
});
