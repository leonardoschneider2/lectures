import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

test('renders learn react link', () => {
  renderWithRouterAndRedux(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
