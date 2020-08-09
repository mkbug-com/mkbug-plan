import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduces from './../reduces';

export default createStore(reduces, applyMiddleware(thunk));