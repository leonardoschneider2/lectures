import React from 'react';
import { connect } from 'react-redux';
import movieAction from '../redux/actions/movieActions';

class Sidebar extends React.Component {
  render() {
    const { categories, watchMovie } = this.props;
    return(
      <fieldset>
          <legend>Player</legend>
          {
            categories.map((element, index) => {
              const { name: category, movies } = element;
              return (
                <div key={`category-${index}`}>
                  <h2>{category}</h2>
                <ul>
                  {
                    movies.map(({title}, index) => (
                      <div className="sidebar-movie" key={`movie-${index}`}>
                        <li>{title}</li>
                        <button
                          type="button"
                          onClick={ () => watchMovie(category, title) }
                        >
                          Clique
                        </button>
                      </div>
                      
                    ))
                  }
                </ul>
                </div>
              );
            })
          }
        </fieldset>
    );
  }
}

const mapStateToProps = (store) => ({
  categories: store.movieReducer.categories,
})

const mapDispatchToProps = (dispatch) => ({
  watchMovie: (category, movie) => dispatch(movieAction(category, movie)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);