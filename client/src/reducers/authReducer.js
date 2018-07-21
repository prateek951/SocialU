import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/types';

// Initial state for the authentication portion of the application

const initialState = {
  isAuthenticated: false,
  user: {}
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
