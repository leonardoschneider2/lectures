import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionChangeDog } from './redux/actions';

class App extends React.Component {
  changeDog = async () => {
    const { getNewDog } = this.props;
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json());
    console.log(response.message);
    getNewDog(response.message);
  }

  render() {
    const { dogURL } = this.props;
    return (
      <div className="App">
        <img src={dogURL} alt="cachorrinho aleatório" />
        <button
          onClick={ this.changeDog }
          type="button"
        >
          Troca Doguinho
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  dogURL: store.dog.dogURL,
});

const mapDispatchToProps = (dispatch) => ({
  getNewDog: (url) => dispatch(actionChangeDog(url)),
});

App.propTypes = {
  dogURL: PropTypes.string.isRequired,
  getNewDog: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
