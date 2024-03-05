import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";



const rootReducer = combineReducers({
    token: authSlice
})

export {rootReducer}