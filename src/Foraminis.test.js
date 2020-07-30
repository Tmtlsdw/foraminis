import React from 'react';
import { render } from '@testing-library/react';
import Foraminis from "./containers/Foraminis";

test('renders learn react link', () => {
  const { getByText } = render(<Foraminis />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
