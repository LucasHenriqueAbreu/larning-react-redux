import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// TODO: estudar os testes de interface.
test('Renderizar a tela com o logo e com os menus', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Aprendendo/i)).toBeInTheDocument();
});
