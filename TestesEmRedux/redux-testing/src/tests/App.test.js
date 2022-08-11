import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import { cleanup, screen } from '@testing-library/react';

import renderWithRedux from './helpers';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('the page should have a button and a text 5', () => {
    renderWithRedux(
      <App />,
      { initialState: { clickReducer: { counter: 5 } } }
    );
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('o click funciona:', () => {
    renderWithRedux(<App />);
    const button = screen.getByText('Clique aqui');
    userEvent.click(button);
    expect(screen.getByText('1')).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('2')).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('3')).toBeInTheDocument();
  })

  test('o click funciona quando começamos com store em 5:', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } }});
    const button = screen.getByText(/Clique Aqui/i);
    expect(screen.getByText('5')).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('6')).toBeInTheDocument();
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    expect(screen.getByText('10')).toBeInTheDocument();
    

  })
});