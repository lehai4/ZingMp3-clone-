import { createSlice } from "@reduxjs/toolkit";

const initial = {
  songs: [],
  playlist: [],
  favoriteList: [],
};

const songListSlide = createSlice({
  name: "songList",
  initialState: initial,
  reducers: {
    getAllSong: (state) => {
      return state;
    },
    handleGetAllSong: (state, action) => {
      const newSong = [...action.payload];
      state.songs = newSong;
      // let tag = action.payload.forEach((item) => console.log(item));
    },
  },
});
const { actions, reducer } = songListSlide;
export const { getAllSong, handleGetAllSong } = actions;
export default reducer;
