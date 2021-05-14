import {imagesReducer} from "./imagesReducer"
import {imageStatusReducer} from "./imageStatusReducer"
import {totalPagesReducer} from "./totalPagesReducer"
import {combineReducers} from "redux"

const allReducers = combineReducers({imagesReducer,imageStatusReducer,totalPagesReducer});

export default allReducers;
