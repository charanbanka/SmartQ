import { combineReducers } from "redux"

const cart = (state={cartDetails:null},action)=>{
    switch(action.type){
        case 'GET':
            return {...state,cartDetails:action?.data}
        default:
            return state
    }
}

export default combineReducers({cart})