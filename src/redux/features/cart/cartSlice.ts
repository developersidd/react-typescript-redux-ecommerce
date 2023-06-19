import { createSlice } from "@reduxjs/toolkit";
import { IBookedProduct } from "../../../Types";

interface IInitCartState {
    bookedProducts: IBookedProduct[]
}

const initialState: IInitCartState = {
    bookedProducts: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        editCartProductQuantity: (state: IInitCartState, { payload }: {
            payload: { id: number, quantity: number, method: string };
            type: string;
        }) => {
            const clickedPd = state.bookedProducts.find(pd => pd.id === payload?.id);
            if (clickedPd) {
                if (payload.method === "inc") {
                    clickedPd.quantity += payload.quantity;
                } else {
                    clickedPd.quantity -= payload.quantity;
                }
            }
        },
        editProductQuantity: (state: IInitCartState, { payload }: {
            payload: any;
            type: string;
        }) => {
            const clickedPd = state.bookedProducts.find(pd => pd.id === payload?.id);
            if (clickedPd) {
                clickedPd.quantity = payload.quantity;
            } else {
                state.bookedProducts.push(payload)
            }
        },
        removeProductFromCart: (state, action) => {
            const productIndexToRemove = state.bookedProducts.findIndex(p => p.id === action.payload);
            state.bookedProducts.splice(productIndexToRemove, 1);
        },

        clearCartProducts: (state) => {
            state.bookedProducts = []
        },

    }
});

export const { editProductQuantity, clearCartProducts, removeProductFromCart, editCartProductQuantity } = cartSlice.actions;

export default cartSlice.reducer; 