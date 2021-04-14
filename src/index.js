import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import {persistor} from './store'
import {PersistGate} from 'redux-persist/lib/integration/react';
// import antdUi from './config/antd-ui';
import api from './config/api';
import {Get, Post, Put, _Delete} from './config/axios';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 全局Axios请求、Api地址
Component.prototype.$api = api;
Component.prototype.$post = Post;
Component.prototype.$get = Get;
Component.prototype.$put = Put;
Component.prototype.$delete = _Delete;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
