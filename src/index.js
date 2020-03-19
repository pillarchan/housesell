import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/commons.less';
import 'antd-mobile/dist/antd-mobile.css';
import store from './store/store';
console.log(store.getState());
ReactDOM.render(<App />, document.getElementById('root'));
