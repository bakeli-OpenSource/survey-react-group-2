import { combineReducers } from "redux";
import { userLoginReducer,userRegisterReducer, userDetailsReducer } from "./userReducers";
import { sondageAddReducer } from "./sondageRedurcers";

const rootReducers = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    sondageadd:sondageAddReducer,
    
})



export default rootReducers;