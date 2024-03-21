import { configureStore } from "@reduxjs/toolkit";
import player from "./Reducers/player";



export default configureStore({
  reducer: {
    player
  }
})
