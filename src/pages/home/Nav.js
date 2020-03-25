import React, { Component } from 'react';
import './nav.less';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './main/Main';
import Chat from './chat/Chat';
import History from './history/History';
import My from './my/My';
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          title: '首页',
          key: 'main',
          icon: require('../../assets/imgs/icon_home.png'),
          iconSelected: require('../../assets/imgs/icon_home_selected.png'),
          url: '/index/main'
        },
        {
          title: '微聊',
          key: 'chat',
          icon: require('../../assets/imgs/icon_chat.png'),
          iconSelected: require('../../assets/imgs/icon_chat_selected.png'),
          url: '/index/chat'
        },
        {
          title: '历史',
          key: 'history',
          icon: require('../../assets/imgs/icon_history.png'),
          iconSelected: require('../../assets/imgs/icon_history_selected.png'),
          url: '/index/history'
        },
        {
          title: '我的',
          key: 'my',
          icon: require('../../assets/imgs/icon_my.png'),
          iconSelected: require('../../assets/imgs/icon_my_selected.png'),
          url: '/index/my'
        }
      ]
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='content'>
          <HashRouter>
            <Switch>
              <Route path='/index/main' component={Main}></Route>
              <Route path='/index/chat' component={Chat}></Route>
              <Route path='/index/history' component={History}></Route>
              <Route path='/index/my' component={My}></Route>
            </Switch>
          </HashRouter>
        </div>
        <div className='nav'>
          {this.state.navList.map(obj => (
            <div key={obj.key} className='nav-item' onClick={() => this.props.history.push(obj.url)}>
              <img alt='图标' src={obj.icon} />
              <div>{obj.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
