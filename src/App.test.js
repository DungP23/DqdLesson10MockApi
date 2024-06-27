import { render, screen } from '@testing-library/react';
import DqdApp from './DqdApp';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
