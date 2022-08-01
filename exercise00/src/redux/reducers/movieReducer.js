import categories from '../../data';

const INITIAL_STATE = {
  categories: [...categories],
  selectedCategorie: categories[0],
  selectedMovie: categories[0].movies[0],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      const { category, movie } = action;
      return {
        ...state,
        selectedCategorie: category,
        selectedMovie: movie,
      }
    default:
      return state;
  }
}

export default movieReducer;