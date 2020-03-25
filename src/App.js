import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './pages/home/Nav';
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
            <Route path='/index' component={Nav} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Route path='/my/mypoint' component={Mypoint} />
            <Redirect from='/' to='/index' />
            <Route component={Error404} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
