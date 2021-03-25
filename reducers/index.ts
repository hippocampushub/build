import {combineReducers} from "redux";
import {hodgkinHuxley} from "./hodgkinHuxley";
import {auth} from "./auth";
import {tos} from "./tos";

const rootReducer = combineReducers({
    hodgkinHuxley,
    tos,
    auth
})

export {
    rootReducer
}