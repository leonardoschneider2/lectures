import { CHANGE_DOG } from '../actions';

const initialState = {
  dogURL: '',
}

const dog = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DOG:
      return {
        dogURL: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default dog;