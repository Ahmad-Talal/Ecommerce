import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants/cartConstants'

export const cartReducer = ( state = { cartItems :[]  }, action ) => {
    switch(action.type){
    case ADD_TO_CART:
        const item= action.payload
        //console.log("payload data",latest)
        const existItem= state.cartItems.find(x =>x.product=== item.product )
        //console.log("ye lo empty",cartItems)
    if(existItem)
    {
        return{
            ...state,
            cartItems:state.cartItems.map(x=>
                x.product=== existItem.product ? item : x) 
        }
    }
    else
    {
        return{
            ...state,
            cartItems:[...state.cartItems,item]
        }
     }

    case REMOVE_FROM_CART:
        return{
            ...state,
            cartItems:state.cartItems.filter(x=>
                x.product != action.payload) 
        }

    default:
        return state 
}
  
}


