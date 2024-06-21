import { createSlice } from "@reduxjs/toolkit"

const initialState={
    vegetable:[],
}

export const vegeSlice=createSlice({
    name:"vegetables",
    initialState,
    reducers:{
        setVeg:(state,action)=>{
            state.vegetable=[...state.vegetable,action.payload]
        }
    }
})
export const {setVeg} = vegeSlice.actions;
export default vegeSlice.reducer;