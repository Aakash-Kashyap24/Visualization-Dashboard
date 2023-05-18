import {
GET_DATA_REQUEST,
GET_DATA_SUCCESS,
GET_DATA_FAIL,
CLEAR_ERRORS
} from '../constants/dataConstanst.jsx'






const initialState = {
    isLoading: null,
    error:null,
    data:[],
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data:action.data
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                data:[],
                error:action.payload
            };
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }
        default:
            return state;
    }
};

