import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER} from './types';
import {setAuthToken} from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (userData,history) => dispatch => {
    axios.post('/api/users/register',userData)
    .then(res =>  history.push('/login'))
    .catch(err => 
    dispatch({
        type:  GET_ERRORS,
        payload: err.response.data
    }));
}

/* loginUser action */

export const loginUser = userData => dispatch => {

    axios.post('/api/users/login',userData)
    .then(res => {
        //Save to localStorage the token that we get
        const { token } = res.data;
        localStorage.setItem('jwtToken',token);
        //Set token to authheader
        setAuthToken(token);
        //Decode token
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoder));
    }).catch(err => dispatch({type: GET_ERRORS,payload: err.response.data}));

};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    //Remove the token from the localStorage
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}