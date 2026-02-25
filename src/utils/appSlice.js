import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    movie: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    movieList: (state, action) => {
      console.log(action.payload)
      state.movie = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, movieList } = appSlice.actions;
export default appSlice.reducer;
