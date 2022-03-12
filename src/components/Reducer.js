import { combineReducers } from "redux"

const cart = (state={cartDetails:null,cart:[],totalCost:0,isCredit:false},action)=>{
    switch(action.type){
        case 'GET':
            return {...state,cartDetails:action?.data}
        case 'CARTADD':
            return {...state,
                cart: [...state.cart,action.item],
                totalCost:state.totalCost+action.item?.subTotal}
        case 'DELETECARTITEM':
            return {...state,cart:state.cart.filter((val)=>val.foodid!==action?.cartItem?.foodid),totalCost:state.totalCost-action?.cartItem?.subTotal}
        case 'DELETECART':
            return {...state,cart:[],totalCost:0}
        case 'SETCREDIT':
            return {...state,isCredit:true}
        case 'NOSETCREDIT':
            return {...state,isCredit:false}
        default:
            return state
    }
}

export default combineReducers({cart})