import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Reg from './pages/reg/Reg';
import Error404 from './pages/error/Error404';
import Mypoint from './pages/home/my/mypoint/Mypoint';
import store from './store/store';
import { Provider } from 'react-redux';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Route path='/my/mypoint' component={Mypoint} />

            <Route component={Error404} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
