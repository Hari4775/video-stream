import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import ChatSlice from "./ChatSlice";
import dataSlice from "./dataSlice";

const store=configureStore({
reducer:{
    app:AppSlice,
    chat:ChatSlice,
    video:dataSlice,
   
}
})

export default store