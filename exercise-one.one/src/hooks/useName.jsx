import { useState, useEffect } from 'react';

function useName(defaultValue) {
  const [name, setName] = useState(defaultValue);

  useEffect(() => {
    console.log('cacetada!');
  }, []);

  return [name, setName];
}

export default useName;