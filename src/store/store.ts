import { configureStore } from "@reduxjs/toolkit";
import loggedUserStore from "./loggedUserStore";

export interface RootState{
    login:{
        username:string
    }
}
export const store=configureStore({
    reducer:{
        login:loggedUserStore
    }
});