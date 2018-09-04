import {combineReducers } from 'redux'
import { textsReducer } from '../reducers/text-reducer'

const rootReducer = combineReducers({text:textsReducer});
export default rootReducer;