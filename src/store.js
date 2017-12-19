import {combineReducers} from 'redux'
import containerReducer from './Container/reducer';

const appStore = combineReducers({
    containerReducer
});

export default appStore;