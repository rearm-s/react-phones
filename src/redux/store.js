import {createStore, compose, applyMiddleware} from "redux";
import rootReducers from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const store = createStore(
    rootReducers,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

window.store = store

export default store;