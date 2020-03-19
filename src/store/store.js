//引入数据仓库模块
import { createStore } from 'redux';
//引入reducers
import reducers from './reducers';
//导出数据仓库
export default createStore(reducers);
