import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import chatSlice from "./chatSlice";



const store= configureStore({
  reducer:{
    navigation:navSlice,
    chat:chatSlice
  }


});

export default store ;