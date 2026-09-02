import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dapet logo', () => {
  render(<App />);
  const logoElements = screen.getAllByText(/dapet/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
