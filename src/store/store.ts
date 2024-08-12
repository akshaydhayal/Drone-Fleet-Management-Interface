import { configureStore } from "@reduxjs/toolkit";
import loggedUserStore from "./loggedUserStore";

export const store=configureStore({
    reducer:{
        login:loggedUserStore
    }
});