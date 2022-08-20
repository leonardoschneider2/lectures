import { useEffect, useState } from 'react';

function useHookName(defaultValue) {
  const [name, setName] = useState(defaultValue);

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  return [name, setName];
}

export default useHookName;
