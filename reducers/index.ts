import {combineReducers} from "redux";
import {hodgkinHuxley} from "./hodgkinHuxley";
import {tos} from "./tos";

const rootReducer = combineReducers({
        hodgkinHuxley,
        tos
})

export {
    rootReducer
}