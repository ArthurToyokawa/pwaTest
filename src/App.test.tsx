import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders about link', () => {
  const view = render(<App/>);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const linkElement = view.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});