const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

const professionalData = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case 'ADD_PROFESSIONAL_DATA':
    return {
      ...state,
      curriculum: action.curriculum,
      job: action.job,
      description: action.description,
    };
  default:
    return {
      ...state,
    };
  }
};

export default professionalData;
