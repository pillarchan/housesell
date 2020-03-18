import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Main from './main/Main';
import Chat from './chat/Chat';
import History from './history/History';
import My from './my/My';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'main',
      navList: [
        {
          title: '首页',
          key: 'main',
          icon: require('../../assets/imgs/icon_home.png'),
          iconSelected: require('../../assets/imgs/icon_home_selected.png')
        },
        {
          title: '微聊',
          key: 'chat',
          icon: require('../../assets/imgs/icon_chat.png'),
          iconSelected: require('../../assets/imgs/icon_chat_selected.png')
        },
        {
          title: '历史',
          key: 'history',
          icon: require('../../assets/imgs/icon_history.png'),
          iconSelected: require('../../assets/imgs/icon_history_selected.png')
        },
        {
          title: '我的',
          key: 'my',
          icon: require('../../assets/imgs/icon_my.png'),
          iconSelected: require('../../assets/imgs/icon_my_selected.png')
        }
      ]
    };
  }

  renderContent() {
    switch (this.state.selectedTab) {
      case 'main':
        return <Main />;
      case 'chat':
        return <Chat />;
      case 'history':
        return <History />;
      case 'my':
        return <My />;
      default:
        return <Main />;
    }
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar unselectedTintColor='#949494' tintColor='#33A3F4' barTintColor='white' tabBarPosition='bottom'>
          {this.state.navList.map(obj => (
            <TabBar.Item
              title={obj.title}
              key={obj.key}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${obj.icon}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${obj.iconSelected}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selected={this.state.selectedTab === obj.key}
              onPress={() => {
                this.setState({
                  selectedTab: obj.key
                });
              }}
            >
              {this.renderContent()}
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    );
  }
}
