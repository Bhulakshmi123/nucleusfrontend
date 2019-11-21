import counterReducer from './counter';
import loggedReducer from './isLogged';
import dataPicker from './dataPicker';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    dataPicker: dataPicker
})
export default allReducers;