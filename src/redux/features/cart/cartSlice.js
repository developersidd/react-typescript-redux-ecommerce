import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookedProducts: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        editQuantity: (state, action) => {
            const clickedPd = state.bookedProducts.find(pd => +pd.id === +action.payload?.id)
            console.log("clickedPdd:", clickedPd)
            console.log("quantity:", action.payload?.quantity)
            clickedPd.quantity += +action.payload?.quantity;
        },
        addProduct: (state, action) => {
            state.bookedProducts.push(action.payload)
        },
        clearCartProducts: (state, action) => {
            state.bookedProducts = []
        },
    }
});

export const { addProduct, editQuantity, clearCartProducts } = cartSlice.actions;

export default cartSlice.reducer; 