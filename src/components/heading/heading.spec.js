import { render, screen } from '@testing-library/react';
import Heading from './heading.js';

test('renders todo list heading', () => {
  render(<Heading />);
  const headingElement = screen.getByText('Yet Another Todo List!');
  expect(headingElement).toBeInTheDocument();
});