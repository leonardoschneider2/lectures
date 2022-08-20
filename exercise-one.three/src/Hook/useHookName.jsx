import { useState } from 'react';

function useHookName(value) {
  // 🐨 inclua um useState para o 'animal'
  const [name, setName] = useState(value);

  return [name, setName];
}

export default useHookName;
