const movieAction = (category, movie) => ({
  type: 'SELECT_MOVIE',
  category,
  movie,
})

export default movieAction;