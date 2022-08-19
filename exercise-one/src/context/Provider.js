// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
    const [cars, setCars] = useState({
      red: false,
      blue: false,
      yellow: false,
    });

  const moveCar = (car) => {
    setCars({
      ...cars,
      [car]: cars[car] ? false : true,
    });
  };

  const context = {
    cars: {
      ...cars,
    },
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
