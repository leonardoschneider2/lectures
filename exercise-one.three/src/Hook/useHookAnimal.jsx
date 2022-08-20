import { useState } from 'react';

function useHookAnimal(value) {
  // 🐨 inclua um useState para o 'animal'
  const [animal, setAnimal] = useState(value);

  return [animal, setAnimal];
}

export default useHookAnimal;