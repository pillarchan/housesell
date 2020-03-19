//引入合并reducer模块
import { combineReducers } from 'redux';
function test(state = 'test', action) {
  switch (action.type) {
    case 'changeTest':
      return action.newVal;
    default:
      return state;
  }
}
//导出合并的reducers
export default combineReducers({
  test
});
