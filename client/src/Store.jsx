

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from "./reducer/dataReducer";
import { userReducer } from "./reducer/userReducer";


const reducer = combineReducers({
   data:dataReducer,
    user: userReducer

});


const middleware = [thunk];

const store = createStore(
    reducer,
   
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
