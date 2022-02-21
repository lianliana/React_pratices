//引入常量
import {INCREMENT,DECREMENT} from './const_count'
//定义Action函数
export function createIncrementAction(data){
    return {type:INCREMENT,data}
}
export function createDecrementAction(data){
    return {type:DECREMENT,data}
}
//异步传函数Action
export function createIncrementAsyncAction(data,time){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch({type:INCREMENT,data})
        }, time);
    }
}