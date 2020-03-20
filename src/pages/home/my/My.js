import React, { Component } from 'react';
import { List } from 'antd-mobile';
import './my.less';
const Item = List.Item;
export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: '请注册/登录',
      myList: [
        { id: '13' },
        { id: '1', icon: 'icon_jifen', title: '我的积分', url: '/my/mypoint' },
        { id: '2', icon: 'icon_dingyue', title: '我的订阅' },
        { id: '3', icon: 'icon_lianxiren', title: '微聊联系人' },
        { id: '10' },
        { id: '4', icon: 'icon_jisuanqi', title: '房贷计算器' },
        { id: '5', icon: 'icon_home', title: '我的房子' },
        { id: '11' },
        { id: '6', icon: 'icon_shijian', title: '我的看房记录' },
        { id: '7', icon: 'icon_my_user', title: '我的问答' },
        { id: '12' },
        { id: '8', icon: 'icon_shezhi', title: '设置' },
        { id: '9', icon: 'icon_yijian', title: '意见反馈' }
      ]
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='top' onClick={this.toLogin.bind(this)}>
          {this.state.acc}
        </div>
        <div className='bottom'>
          <List>
            {this.state.myList.map(obj => {
              if (obj.icon) {
                return (
                  <Item
                    key={obj.id}
                    thumb={require(`../../../assets/imgs/${obj.icon}.png`)}
                    arrow='horizontal'
                    onClick={() => {
                      this.props.history.push(obj.url);
                    }}
                  >
                    {obj.title}
                  </Item>
                );
              } else {
                return <div key={obj.id} style={{ height: '0.5rem', backgroundColor: '#f4f4f4' }}></div>;
              }
            })}
          </List>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      acc: localStorage.user ? JSON.parse(localStorage.user).acc : '请注册/登录'
    });
  }
  toLogin() {
    this.props.history.push('/login');
  }
}
