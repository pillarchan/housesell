//引入创建仓库的模块
import { createStore } from 'redux';

//创建仓库
const store = createStore(function(state, action) {
  switch (action.type) {
    case 'changeName':
      return action.name;
    default:
      return '张三';
  }
});

const a = {
  type: 'changeName',
  name: '李四'
};
store.dispatch(a);
console.log(store.getStore());
//导出仓库
export default store;
