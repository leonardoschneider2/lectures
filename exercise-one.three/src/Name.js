import React, { useContext } from 'react';
import MyContext from './Context/MyContext';


function Name() {
  const { name, setName } = useContext(MyContext);
  return (
    <div>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
      </div>
  );
}

export default Name;