import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "Select Category",
    sortBy: "Regular",
    search: ""
};

const filterSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            state.category = action.payload
        },
        sortByPrice: (state, action) => {
            state.sortBy = action.payload
        },
        searchBy: (state, action) => {
            state.search = action.payload
        },
    }
});

export const { filterByCategory, sortByPrice, searchBy } = filterSlice.actions;
export default filterSlice.reducer; 