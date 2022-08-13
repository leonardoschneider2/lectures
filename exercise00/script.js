// DEfinir o estado inicial da Aplicação
const INICIAL_STATE = {
  theme: 'dark',
}

// Criando a Store e adicionando o reducer
// Adicionar REDUX DEVTOOLS
const reducer = (state = INICIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: (state.theme === 'dark') ? 'light' : 'dark',
      }
    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

  console.log(store);

// Definir as mudanças do estado
// ACTIONS
const action = {type: 'CHANGE_THEME'}

const button = document.querySelector('.clique');
button.addEventListener('click', () => {
  store.dispatch(action);
  console.log('voce clicou');
});

store.subscribe(() => {
  const state = store.getState();
  const fundo = document.querySelector('body');
  fundo.className = state.theme;
});

