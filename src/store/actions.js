export function changeTest(newVal) {
  return {
    type: 'changeTest',
    newVal
  };
}
//添加一条房产信息到历史
export function addEstateInfoToHistory(houseObj) {
  return {
    type: 'addEstateInfoToHistory',
    houseObj
  };
}
