import { createSlice } from "@reduxjs/toolkit";

interface IInitProductState {
    whichListProductsId: Array<number>;
}

interface IAction { payload: any; type: string; }

const initialState: IInitProductState = {
    whichListProductsId: []
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToWhichList(state: IInitProductState, action: IAction) {
            state.whichListProductsId.push(action.payload);
        },
        removeFromWhichList(state: IInitProductState, action: IAction) {
            state.whichListProductsId.splice(state.whichListProductsId.indexOf(action.payload), 1);
        }
    }
});

export const { addToWhichList, removeFromWhichList } = productSlice.actions;
export default productSlice.reducer;
