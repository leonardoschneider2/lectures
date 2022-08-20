import React from 'react';
import FavoriteAnimal from './FavoriteAnimal';
import useHookAnimal from './Hook/useHookAnimal';
import useHookName from './Hook/useHookName';
import Name from './Name';
import MyContext from './Context/MyContext';

function App() {
  const [name, setName] = useHookName('');
  const [animal, setAnimal] = useHookAnimal('');

  const context = {
    name,
    setName,
    animal,
    setAnimal,
  }
  return (
    <MyContext.Provider value={context}>
      <form>
        <Name />
        <FavoriteAnimal />
        <div>{`Hey ${name}, you have a real beautiful ${animal}`}</div>
      </form>
    </MyContext.Provider>
  );
}

export default App;
