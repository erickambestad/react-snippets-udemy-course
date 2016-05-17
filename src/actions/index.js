import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from './types'

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

    return function(dispatch) {

        // Submit to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // Update state
                dispatch({ type: AUTH_USER });
                // Save JWT token
                localStorage.setItem('token', response.data.token);
                // Redirect route
                browserHistory.push('/feature');
            })
            .catch(() => {
                dispatch(authError('Bad login info'));
            });

    }

}

export function signupUser({ email, password }) {

    return function(dispatch) {

        // Submit to server
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                // Update state
                dispatch({ type: AUTH_USER });
                // Save JWT token
                localStorage.setItem('token', response.data.token);
                // Redi rect route
                browserHistory.push('/feature');
            })
            .catch(response => {
                dispatch(authError(response.data.error));
            });

    }

}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        });
    }
}