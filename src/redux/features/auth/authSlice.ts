import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../Types";

interface InitialState {
    user: IUser;
}

const initialState: InitialState = {
    user: {
        displayName: "",
        email: "",
        photoURL: ""
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        userLoggedIn: (state, action) => {
            state.user = action.payload;
        },
        userLoggedOut: (state) => {
            state.user = {
                displayName: "",
                email: "",
                photoURL: ""
            };
        }
    }
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer; 