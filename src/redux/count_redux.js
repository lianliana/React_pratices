import { INCREMENT,DECREMENT } from "./const_count"
const initState=0

export default function count_redux(preState=initState,action){
    const {type,data}=action
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState
    }
}