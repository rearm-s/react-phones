import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";
import store from './redux/store'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
