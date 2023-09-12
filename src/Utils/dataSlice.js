import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"video",
    initialState:[],
    reducers:{
        setVideodata:(state,action)=>{
           return  action.payload
        }

    }
})

export const {setVideodata}=dataSlice.actions
export default dataSlice.reducer