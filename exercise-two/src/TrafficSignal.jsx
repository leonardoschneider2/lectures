// src/TrafficSignal.jsx

import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import myContext from './myContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <myContext.Consumer>
      {
        value => {
          const { signal, handleSignalColor } = value;
          console.log(signal);
          return (
            <div>
              <div className="button-container">
                <button onClick={() => handleSignalColor('red')} type="button">
                  Red
                </button>
                <button onClick={() => handleSignalColor('yellow')} type="button">
                  Yellow
                </button>
                <button onClick={() => handleSignalColor('green')} type="button">
                  Green
                </button>
              </div>
              <img className="signal" src={renderSignal(signal)} alt="" />
            </div>
          );
        }
      }
    </myContext.Consumer>
  );
};

export default TrafficSignal;
