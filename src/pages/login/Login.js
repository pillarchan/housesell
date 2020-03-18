import React, { Component } from 'react';
import { Flex, WhiteSpace, WingBlank, InputItem, Button } from 'antd-mobile';
import './login.less';
import { userInfo } from '../../apis/ajax';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: '',
      pwd: '',
      styles: { display: 'none' }
    };
  }
  render() {
    return (
      <div>
        <WhiteSpace size='lg' />
        <Flex justify='center'>
          <img className='logoImg' alt='logo' src={require('../../assets/imgs/logo.png')}></img>
        </Flex>
        <WhiteSpace size='lg' />
        <WingBlank size='lg'>
          <InputItem
            placeholder='请输入手机号'
            clear
            value={this.state.acc}
            onChange={val => this.setState({ acc: val })}
          >
            <div
              style={{
                backgroundImage: `url(${require('../../assets/imgs/user.png')})`,
                backgroundSize: 'cover',
                height: '22px',
                width: '22px'
              }}
            />
          </InputItem>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size='lg'>
          <InputItem
            type='password'
            placeholder='请输入密码'
            clear
            value={this.state.pwd}
            onChange={val => this.setState({ pwd: val })}
          >
            <div
              style={{
                backgroundImage: `url(${require('../../assets/imgs/lock.png')})`,
                backgroundSize: 'cover',
                height: '22px',
                width: '22px'
              }}
            />
          </InputItem>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size='lg'>
          <div style={this.state.styles}>用户名或密码错误</div>
          <Button type='primary' onClick={this.toLogin.bind(this)}>
            登录
          </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size='lg'>
          <Flex justify='between'>
            <a href='#/reg'>手机快速注册</a>
            <a href='#/forget'>忘记密码？</a>
          </Flex>
        </WingBlank>
      </div>
    );
  }
  async toLogin() {
    let res = await userInfo({ acc: this.state.acc, pwd: this.state.pwd });
    if (res.data === 0) {
      this.setState({
        styles: { color: 'red', display: 'block' }
      });
    } else {
      localStorage.setItem('userId', res.data._id);
      this.props.history.push('/');
    }
  }
}
