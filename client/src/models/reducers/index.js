import { combineReducers } from 'redux';
import info, { infoState } from './info';

export const initState = {
  info: { ...infoState },
}

const reducers = combineReducers({
  info
});

export default reducers;