import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const { personalData, professionalData } = this.props;
    const { name, email, cpf, address, city, uf } = personalData;
    const { curriculum, job, description } = professionalData;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  personalData: store.personalData,
  professionalData: store.professionalData,
});

FormDataDisplay.propTypes = {
  personalData: PropTypes.object,
  professionalData: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, null)(FormDataDisplay);
