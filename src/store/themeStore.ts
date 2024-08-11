import { createSlice } from "@reduxjs/toolkit";

const themeStore=createSlice({
    name:'themeStore',
    initialState:{
        theme:'dark'
    },
    reducers:{
        changeTheme:(state,action)=>{
            state.theme=='dark'?state.theme='light':state.theme='dark';
        }
    }
})
export const {changeTheme}=themeStore.actions;
export default themeStore.reducer;
