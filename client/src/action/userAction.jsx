import {
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../constants/userConstant.jsx'



import axios from 'axios';


export const login = ({ email, password }) => async (dispatch) => {
    try {
        dispatch({
            type: USER_AUTH_REQUEST
        });

        console.log('action', email, password)
        // Make an API call to fetch the data
        // Replace the following code with your actual API call
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('/api/v1/login', { email, password }, config);



        dispatch({
            type: USER_AUTH_SUCCESS,
            payload: data
        });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: USER_AUTH_FAIL,
            payload: errorMessage
        });
    }
};


export const clearErrors = () => async (dispatch) => {

    dispatch({
        type: CLEAR_ERRORS,
    });
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        // Retrieve the user from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch({ type: LOAD_USER_SUCCESS, payload: user });
        } else {
            dispatch({ type: LOAD_USER_FAIL, payload: 'No user found' });
        }
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: LOAD_USER_FAIL, payload: errorMessage });
    }
};

// Logout User
export const logout = () => async (dispatch) => {
    try {
       
        localStorage.removeItem('user')

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: LOGOUT_FAIL, payload: errorMessage });
    }
};


