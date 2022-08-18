import React from 'react';
import './App.css';
import Cars from './Cars';
import myContext from './myContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  handleSide = (car) => {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: prevState.cars[car] ? false : true,
      }
    }));
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      handle: this.handleSide,
    }
  
    return (
      <myContext.Provider value={contextValue}>
        <Cars />
      </myContext.Provider>
    );
  }
}

export default App;
