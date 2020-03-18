import React, { Component } from 'react';
import './main.less';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '定位中'
    };
  }
  componentDidMount() {
    //初始化请求地图数据
    // //实例化城市查询类
    // 这里注意作用域问题和this指向问题！！！！！

    //自动获取用户IP，返回当前城市
    console.log(window.google.maps);

    let infoWindow = new window.google.maps.InfoWindow();
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude, position.coords.longitude, infoWindow);
      infoWindow.get();
    });
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="city">{this.state.city}▼</div>
          <div className="search">
            <img alt="" src={require('../../../assets/imgs/zoom.png')}></img>
            <label>搜索房产信息/楼盘</label>
          </div>
          <div className="map">
            <img alt="" src={require('../../../assets/imgs/map.png')}></img>
          </div>
        </header>
      </div>
    );
  }
}
