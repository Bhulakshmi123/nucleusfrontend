import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import leadReducer from './leadReducer';
import sidebarView from './sidebarView';
import savedTokenNo from './savedTokenNo'
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    sidebarView: sidebarView,
    tokenNo: savedTokenNo,
    lead: leadReducer
})
export default allReducers;