import { type RootState } from "../../app/store";

export const selectAuth = (state: RootState) => state.userAuth;
