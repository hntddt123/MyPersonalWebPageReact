import { render, screen } from '@testing-library/react';
import App from '../App';

test('Canary', () => {
  expect(1).toBe(1);
});

test('App renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nien-Tai Ho/i);
  expect(linkElement).toBeInTheDocument();
});
