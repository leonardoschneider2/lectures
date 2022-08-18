// src/Cars.jsx
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import myContext from './myContext';

function Cars() {
  return (
    <myContext.Consumer>
      {
        value => {
          const { cars, handleCarSide } = value;
          return (
            <div>
              <div>
                <img
                  className={cars.red ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => handleCarSide('red')}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={cars.blue ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => handleCarSide('blue')}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={cars.yellow ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => handleCarSide('yellow')}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>

          );
        }
      }
    </myContext.Consumer>
  );
}

export default Cars;