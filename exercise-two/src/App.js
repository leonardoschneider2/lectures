import React from 'react';
import TrafficSignal from './TrafficSignal';
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
      signal: { color: 'red' },
    };
  }

  handleCarSide = (colorCar) => {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [colorCar]: prevState.cars[colorCar] ? false : true,
      }
    }));
  };

  handleSignalColor = (colorSignal) => {
    this.setState({
      signal: {
        color: colorSignal,
      },
    });
  }

  render() {
    const context = {
      handleCarSide: this.handleCarSide,
      handleSignalColor: this.handleSignalColor,
      cars: this.state.cars,
      signal: this.state.signal.color,
    }

    return (
      <myContext.Provider value={context}>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </myContext.Provider>
    );
  }
}

export default App;
