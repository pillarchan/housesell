import React, { Component } from 'react';
import { connect } from 'react-redux';
import Estates from '../../../components/Estates';
// import { changeTest } from '../../../store/actions';
class History extends Component {
  render() {
    return (
      <div>
        浏览过的房产
        {this.props.estateList.map(obj => (
          <Estates key={obj.id} {...obj} />
        ))}
      </div>
    );
  }
}
function filter(state) {
  return { estateList: state.estateList };
}
export default connect(filter)(History);
