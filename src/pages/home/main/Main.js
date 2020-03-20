import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import Estates from '../../../components/Estates';
import { estatesInfo } from '../../../apis/ajax';
import { addEstateInfoToHistory } from '../../../store/actions';
import { connect } from 'react-redux';
import './main.less';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '定位中',
      menuList: [
        {
          id: '1',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '新房'
        },
        {
          id: '2',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '二手房'
        },
        {
          id: '3',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '租房'
        },
        {
          id: '4',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '商铺写字楼'
        },
        {
          id: '5',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '卖房'
        },
        {
          id: '6',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '海外房产'
        },
        {
          id: '7',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '小区房价'
        },
        {
          id: '8',
          icon: require('../../../assets/imgs/icon_new_house.png'),
          title: '问答'
        }
      ].map(_val => ({
        icon: _val.icon,
        text: _val.title
      })),
      estates: []
    };
  }
  clickHouse(val) {
    this.props.dispatch(addEstateInfoToHistory(val));
  }
  async componentDidMount() {
    const res = await estatesInfo();
    this.setState({
      estates: res.data
    });
  }
  render() {
    return (
      <div>
        <header className='header'>
          <div className='city'>成都市▼</div>
          <div className='search'>
            <img alt='' src={require('../../../assets/imgs/zoom.png')}></img>
            <label>搜索房产信息/楼盘</label>
          </div>
          <div className='map'>
            <img alt='' src={require('../../../assets/imgs/map.png')}></img>
          </div>
        </header>
        <div className='carousel'>
          <h1>轮播</h1>
        </div>
        <div>
          <Grid data={this.state.menuList} hasLine={false} />
        </div>
        <div className='estate'>
          <h1>房产大百科</h1>
        </div>
        <div className='guessLike'>
          猜你喜欢
          {this.state.estates.map(obj => (
            <div onClick={this.clickHouse.bind(this, obj)} key={obj.id}>
              <Estates {...obj}></Estates>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect()(Main);
