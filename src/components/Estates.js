import React, { Component } from 'react';
import './estates.less';
export default class Estates extends Component {
  // 此处做容错处理，设置静态属性
  static defaultProps = {
    name: '默认楼盘', //楼盘名
    area: '默认区域', //所在区域
    range: '默认地址', //具体街道
    type: '0室0厅', //户型
    point: 0, //平方面积
    price: 0, //价格
    src: '../assets/imgs/icon_new_house.png' //楼盘图片
  };
  render() {
    let { name, area, range, type, point, price, src } = this.props;
    return (
      <div>
        <div className='estates'>
          <img alt='楼盘图片' src={src} />
          <div className='estatesDesc'>
            <div className='estatesDescLeft'>
              <p className='estatesDescName'>{name}</p>
              <p className='estatesDescArea'>{area + ' ' + range}</p>
              <p className='estatesDescType'>{type + ' ' + point}</p>
            </div>
            <p className='estatesDescPrice'>{price}/平</p>
          </div>
        </div>
      </div>
    );
  }
}
