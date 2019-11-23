import counterReducer from './counter';
import loggedReducer from './isLogged';
import dataPicker from './dataPicker';
import { combineReducers } from 'redux';
import leadReducer from './leadReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    dataPicker: dataPicker,
    lead: leadReducer
})
export default allReducers;