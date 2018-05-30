import isEmpty from '../validation/is-empty';
import {GET_ERRORS} from '../actions/types';
import {SET_CURRENT_USER} from '../actions/types';

// Initial state for the authentication
const INITIAL_STATE = {
    isAuthenticated: false,
    user: {}
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default function(state=INITIAL_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}