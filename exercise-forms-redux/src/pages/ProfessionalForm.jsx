import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { addProfessionalData } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = ({
      curriculum: '',
      job: '',
      description: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { professionalDispatch } = this.props;
    const { curriculum, job, description } = this.state;
    const professional = { curriculum, job, description };
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ () => professionalDispatch(professional) }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  professionalDispatch: (professional) => dispatch(addProfessionalData(professional)),
});

ProfessionalForm.propTypes = {
  professionalData: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(ProfessionalForm);
