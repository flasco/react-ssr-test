import { INFO_SET } from '../actions';
import { combineReducers } from 'redux';

const infoState = {
  text: 'true',
}

export const initState = {
  info: { ...infoState },
}

function info(state = infoState, action) {
  switch (action.type) {
    case INFO_SET:
      
      return Object.assign({}, state, { ...action.info });
    default:
      return state;
  }
}

const reducers = combineReducers({
  info
});

export default reducers;