import React from 'react';
import useName from './hooks/useName';

function Greeting() {
  const [name, setName] = useName('Leonardo');

  const handleChange = ({ target }) => {
    setName(target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" onChange={ handleChange } id="name" />
        </label>
      </form>
      {name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name'}
    </div>
  );
}

export default Greeting;
