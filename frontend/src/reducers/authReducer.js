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
        default:
            return state;
    }
}