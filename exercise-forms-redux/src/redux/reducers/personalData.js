const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_PERSONAL_DATA':
    return {
      ...state,
      address: action.address,
      city: action.city,
      cpf: action.cpf,
      email: action.email,
      name: action.name,
      uf: action.uf,
    };
  default:
    return {
      ...state,
    };
  }
};

export default personalData;
