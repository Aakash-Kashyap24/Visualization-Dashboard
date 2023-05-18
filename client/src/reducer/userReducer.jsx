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






const initialState = {
    isLoading: null,
    isAuthenticated: false,
    error: null,
    user: {},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH_REQUEST:
        case LOAD_USER_REQUEST:


            return {
                ...state,
                isLoading: true,

            };
        case USER_AUTH_SUCCESS:

            const userToStore = {
                name: action.payload.user.name,
                role: action.payload.user.role,
            }

            // Store the new object in local storage
            localStorage.setItem('user', JSON.stringify(userToStore));
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,

                user: action.payload.user
            };
        case LOAD_USER_SUCCESS:

         
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,

                user: action.payload
            };

        case USER_AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                user: {},
                isAuthenticated: false,
                error: action.payload
            };
        case LOGOUT_SUCCESS:

            return {
                ...state,
                isLoading: false,
                user: {},
                isAuthenticated: false,
                
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

