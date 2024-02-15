import {createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import rootReducers from "./redux/reducers";

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const sondageInfoFromStorage = localStorage.getItem('sondageInfo') ? JSON.parse(localStorage.getItem('productInfo')):[];



const initialState = {   
    userLogin : {userInfo:userInfoFromStorage},
    sondageadd:{sondageInfo:sondageInfoFromStorage},
};
const middleware =[thunk]

// const store = createStore(rootReducers,initialState,applyMiddleware(thunk),);
const store = createStore(rootReducers,initialState,(applyMiddleware(...middleware)));


export default store;