import { INFO_SET } from '../actions';

export const infoState = {
  text: 'true',
}

function info(state = infoState, action) {
  switch (action.type) {
    case INFO_SET:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
export default info;