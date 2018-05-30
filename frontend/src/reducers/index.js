// File to combine our all reducers


import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth:authReducer
});