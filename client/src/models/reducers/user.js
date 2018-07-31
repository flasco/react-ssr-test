
import { INFO_SET } from '../actions'
export const userState = {
  phone: '15555555555',
  password: '',

}

export default function user(state = userState, action) {
  switch (action.type) {
    case INFO_SET:
      return {
        ...state,
        ...action.info
      };
    default:
      return state;
  }
}