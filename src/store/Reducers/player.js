import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentSong : null,
    status : false,
    progress : 0
  },

  reducers :  {
    setSong : (state, action) => {
      return {...state, currentSong: action.payload}
    }, 
    play: state => {
      return {...state, status : true}
    },
    pause : state => {
      return {...state, status : false}
    },
  }
})

export default playerSlice.reducer
export const {setSong, play, pause} = playerSlice.actions