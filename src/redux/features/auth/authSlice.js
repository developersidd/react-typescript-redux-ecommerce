import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = { email: action.payload?.email, name: action.payload?.displayName, photo: action.payload?.photoURL };
        },
        userLoggedOut: (state) => {
            state.user = undefined;
        }
    }
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer; 