import React, { Component } from 'react';
import { WhiteSpace, InputItem, Button, WingBlank, List, Radio, Flex } from 'antd-mobile';
export default class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCode: '获取验证码',
      phone: '',
      pwd: '',
      code: ''
    };
  }
  render() {
    return (
      <div>
        <WhiteSpace size='lg' />
        <WingBlank size='lg'>
          <List>
            <InputItem
              clear
              placeholder='请输入手机'
              value={this.state.phone}
              onChange={val => this.setState({ phone: val })}
            ></InputItem>
            <InputItem
              type='password'
              clear
              placeholder='请输入密码'
              value={this.state.pwd}
              onChange={val => this.setState({ pwd: val })}
            ></InputItem>
            <Flex justify='between'>
              <InputItem
                clear
                placeholder='请输入验证码'
                value={this.state.code}
                onChange={val => this.setState({ code: val })}
              ></InputItem>
              <Button
                onClick={() => {
                  let res = 0;
                  do {
                    res = Math.round(Math.random() * 1000000).toString();
                    if (res.length === 6) {
                      this.setState({ checkCode: res });
                    }
                  } while (res.length < 6);
                }}
              >
                {this.state.checkCode}
              </Button>
            </Flex>
          </List>
          <Flex style={{ padding: '15px' }}>
            <Flex.Item>
              <Radio className='my-radio' onChange={e => console.log('checkbox', e)}>
                我已同意<a href='/'>《用户服务协议》及《隐私权政策》</a>
              </Radio>
            </Flex.Item>
          </Flex>
          <Button
            type='primary'
            onClick={() => {
              if (this.state.code === this.state.checkCode) {
                console.log(this.state.phone, this.state.pwd, this.state.code);
                this.props.history.push('/login');
              }
            }}
          >
            注册
          </Button>
          <WhiteSpace size='lg' />
          <a href='#/login'>已有账号</a>
        </WingBlank>
      </div>
    );
  }
}
