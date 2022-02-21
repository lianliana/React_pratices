import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
// return一个对象
// 返回的key为传递给UI组件的props的key value即为传递给UI组件的props的value
// mapStateToProps用于传递状态
function mapStateToProps(state){
    return {count:state}
}
// return一个对象
// 返回的key为传递给UI组件的props的key value即为传递给UI组件的props的value
// mapStateToProps用于传递方法
function mapDispatchToProps(dispatch){
    return{
        increment:(data)=>{
            dispatch(createIncrementAction(data))
        },
        decrement:(data)=>{
            dispatch(createDecrementAction(data))
        },
        incrementAsync:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        }
    }
}
// function mapDispatchToProps(dispatch){
//     return{
//         increment：createIncrementAction，
//         decrement: createDecrementAction
//         incrementAsync:createIncrementAsyncAction
//     }
// }
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)