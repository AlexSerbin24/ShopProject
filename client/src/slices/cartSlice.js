import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState: {cartLines:initialState},
    reducers:{
        addToCart(state, {payload}){
            state.cartLines.push({count:1, product:payload});
        },

        removeCartLine(state, {payload}){
            const productId = payload;

            for (let index = 0; index < state.cartLines.length; index++) {
                const cartLine = state.cartLines[index];
                if (cartLine.product.id == productId) {
                    state.cartLines.splice(index,1);
                    break;
                }
            }
        },

        updateCartLine(state,{payload}){
            const {productId, count} = payload;
            for (let index = 0; index < state.cartLines.length; index++) {
                const cartLine = state.cartLines[index];
                if (cartLine.product.id == productId) {
                    cartLine.count = count;
                    break;
                }
            }
        },

        clearCart(state){
            return {...state, cartLines:[]};
        }
    }
})

export const {addToCart, removeCartLine, updateCartLine, clearCart } = cartSlice.actions;

export default cartSlice.reducer;