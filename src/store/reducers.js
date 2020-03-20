import { combineReducers } from 'redux';

function test(state = 'test', action) {
  switch (action.type) {
    case 'changeTest':
      return action.newVal;
    default:
      return state;
  }
}
//历史房产信息
function estateList(state = [], action) {
  switch (action.type) {
    case 'addEstateInfoToHistory':
      return [...new Set([action.houseObj, ...state])];
    default:
      return state;
  }
}
export default combineReducers({
  test,
  estateList
});
