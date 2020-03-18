import React, { Component } from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Error404 from './pages/error/Error404'
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
          <Route component={Error404}/>
        </Switch>
      </HashRouter>
    )
  }
}
