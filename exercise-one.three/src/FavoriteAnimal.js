import React, { useContext } from 'react';
import MyContext from './Context/MyContext';

function FavoriteAnimal() {
  const {animal, setAnimal} = useContext(MyContext);
  return (
    <div>
      <label htmlFor="animal">
        Favorite Animal:
        <input
          id="animal"
          value={ animal }
          onChange={ (event) => setAnimal(event.target.value) }
        />
      </label>
    </div>
  );
}

export default FavoriteAnimal;
