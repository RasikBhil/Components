import {applyMiddleware, combineReducers} from 'redux';
import {createStore} from 'redux';
import app from './reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({app});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
