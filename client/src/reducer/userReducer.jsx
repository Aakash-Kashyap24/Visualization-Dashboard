import {
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstant.jsx'






const initialState = {
    isLoading: null,
    isAuthenticated:false,
    error: null,
    user: {},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,

            };
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated:true,
                user: action.payload.user
            };
        case USER_AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                user: {},
                isAuthenticated:false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

