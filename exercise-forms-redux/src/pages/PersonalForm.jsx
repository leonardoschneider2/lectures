import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { addPersonalData } from '../redux/actions';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = ({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, cpf, address, city, uf } = this.state;
    const person = { name, email, cpf, address, city, uf };
    const { personalDispatch } = this.props;
    const ufList = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ uf }
          label="Estado: "
          id="uf"
          name="uf"
          options={ ufList }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ () => personalDispatch(person) }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  personalDispatch: (person) => dispatch(addPersonalData(person)),
});

PersonalForm.propTypes = {
  personalDispatch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(PersonalForm);
