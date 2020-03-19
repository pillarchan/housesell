import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTest } from '../../../store/actions';
class History extends Component {
  render() {
    return (
      <div>
        <h1>历史</h1>
        {this.props.test}
        <button onClick={() => this.props.dispatch(changeTest('换值了'))}>换值</button>
      </div>
    );
  }
}
function filter(state) {
  return { test: state.test };
}
export default connect(filter)(History);
