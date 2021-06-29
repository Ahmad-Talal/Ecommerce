import axios from 'axios';
import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants/cartConstants';

export const addToCart = (id,qty) => async (dispatch, getState ) => {
    const { data } = await axios.get(`/api/products/${id}`)
    console.log("aagaya idher bhii",id,qty,data._id,data.name,data.price)
    
    dispatch({
        type:ADD_TO_CART,
        payload:{
            product:data._id,
            name: data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
     })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))    
}        

export const removeFromCart = (id) => async (dispatch, getState ) => {
    const { data } = await axios.get(`/api/products/${id}`)
    
    
    dispatch({
        type:REMOVE_FROM_CART,
        payload:data._id
     })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))    
}        

