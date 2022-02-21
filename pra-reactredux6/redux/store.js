//引入中间件和创建store
import {createStore,applyMiddleware} from 'redux'
// 引入reducer
import CountRedux from './count_redux'
//引入thunk 才能够传函数的action
import thunk from 'redux-thunk'
export default createStore(CountRedux,applyMiddleware(thunk))