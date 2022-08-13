import { createStore, combineReducers, applyMiddleware } from 'redux';
import clickReducer from '../../redux/reducers/index';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
// Fetch Mock Jest && Node Fetch

const createMockStore = (initialState) =>( 
  createStore(
    combineReducers({ clickReducer }),
    initialState,
    applyMiddleware(thunk),
  )
)

const renderWithRedux = (
  // parametros da funcao render With Redux
  component,
  {
    initialState,
    store = createMockStore(initialState)
  } = {},
) => (
  // retorno da funcao render With Redux
  {
    ...render(
      <Provider store={ store }>
        {component}
      </Provider>
    ),
    store
  });

export default renderWithRedux;