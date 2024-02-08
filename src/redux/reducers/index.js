import { combineReducers } from "redux";
import { userLoginReducer,userRegisterReducer, userDetailsReducer } from "./userReducers";
import { sondageAddReducer, sondagesListReducer } from "./sondageRedurcers";

const rootReducers = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    sondageadd:sondageAddReducer,
    sondagelist:sondagesListReducer,
    
})



export default rootReducers;