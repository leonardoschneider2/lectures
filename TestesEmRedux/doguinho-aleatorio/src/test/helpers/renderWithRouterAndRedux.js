import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../../redux/reducers';

const renderWithRouterAndRedux = (
  component,
  initialState,
  route = '/',
) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>
          {component}
        </Router>
      </Provider>
    ),
    history,

  }
}

export default renderWithRouterAndRedux;