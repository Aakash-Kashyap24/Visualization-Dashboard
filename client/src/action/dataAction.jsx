import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    CLEAR_ERRORS
} from '../constants/dataConstants.jsx';
import axios from 'axios';


export const getData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_DATA_REQUEST
        });

        // Make an API call to fetch the data
        // Replace the following code with your actual API call
        const { data } = await axios.get('/api/v1/getData');


        dispatch({
            type: GET_DATA_SUCCESS,
            payload: data
        });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: GET_DATA_FAIL,
            payload: errorMessage
        });
    }
};


export const clearErrors = () => async (dispatch) => {

    dispatch({
        type: CLEAR_ERRORS,
    });
}