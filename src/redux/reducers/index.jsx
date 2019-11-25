import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import dataPicker from './dataPicker';
import leadReducer from './leadReducer';
import sidebarView from './sidebarView';
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    sidebarView: sidebarView,
    dataPicker: dataPicker,
    lead: leadReducer
})
export default allReducers;