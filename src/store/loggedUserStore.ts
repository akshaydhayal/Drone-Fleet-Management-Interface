import { createSlice } from "@reduxjs/toolkit";

const loggedUserStore=createSlice({
    name:"loggedUserStore",
    initialState:{
        username:null
    },
    reducers:{
        setLoggedUser:(state,action)=>{
            state.username=action.payload;
        }
    }
});
export const {setLoggedUser}=loggedUserStore.actions;
export default loggedUserStore.reducer;