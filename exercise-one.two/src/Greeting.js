import React from 'react';
import PropTypes from 'prop-types';
import useHookName from './Hook/useHookName';

function Greeting({ initialName }) {
  // 🐨 inicialize o estado com o valor que vem do localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = useHookName(initialName);

  // 🐨 Utilize o hook useEffect para atualizar a
  // propriedade `name` no localStorage quando o estado for alterado
  // 💰 window.localStorage.setItem('name', name)

  const handleChange = ({ target: { value } }) => {
    setName(value);
  }

  return (
    <div>
      {/* Utilizamos o evento onSubmit e event.preventDefault() para evitar que
      a página recarregue ao pressionar a tecla Enter */}
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="name">
          Name:
          <input onChange={ handleChange } id="name" />
        </label>
      </form>
      { name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name' }
    </div>
  );
}

export default Greeting;

Greeting.propTypes = {
  initialName: PropTypes.string,
};

Greeting.defaultProps = {
  initialName: JSON.parse(localStorage.getItem('name')),
};
