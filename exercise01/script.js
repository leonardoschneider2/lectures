const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const createColors = () => {
  const frameColors = [
    'salmon',
    'skyblue',
    'firebrick',
    'floralwhite',
    'palegreen',
    'whitesmoke',
    'darkblue',
    'darkred',
    'darkcyan',
    'rebeccapurple',
    'royalblue',
    'cadetblue',
    'crimson',
    'coral',
  ];

  const numeroAleatorio = Math.floor(Math.random() * frameColors.length);
  console.log(numeroAleatorio);

  store.dispatch({
    type: "ADD_COLOR",
    color: frameColors[numeroAleatorio],
  });
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return {
        ...state,
        colors: [...state.colors, action.color],
      }
    case "NEXT_COLOR":
      return {
        ...state,
        index: (state.index + 1) % (state.colors.length), 
      }
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: (state.index === 0) 
          ? state.colors.length - 1
          : state.index - 1, 
      }
    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const next = document.querySelector('#next')
const previous = document.querySelector('#previous')
const random = document.querySelector('#random');
const value = document.querySelector('#value');

previous.addEventListener('click', () => {
  store.dispatch({type: "PREVIOUS_COLOR"});
});
next.addEventListener('click', () => {
  store.dispatch({type: "NEXT_COLOR"});
});
random.addEventListener('click', createColors);

store.subscribe(() => {
  const state = store.getState();
  const { colors, index } = state;
  value.innerText = colors[index];
});
