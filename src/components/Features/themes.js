import { createSlice } from "@reduxjs/toolkit";

let initialStateBoolean = JSON.parse(localStorage.getItem("ThisSiteDarkMode"))

const themesSlice = createSlice({
  name: "themes",
  initialState: { value: { 
    isDarkTheme: initialStateBoolean,
    dark: {
      bg: "#32373B",
      txt: "#fff",
  },
    light: {
      bg: "#fff",
      txt: "#32373B",
  },
},
  reducers: {
    toggleTheme: (state) => {
      const currentTheme = state.value.isDarkTheme
      
      if (currentTheme) {
        state.value.isDarkTheme = false
      }
      else {
        state.value.isDarkTheme = true
      }
  },
  init: (state) => {
    state.value.isDarkTheme = initialStateBoolean

    if(!initialStateBoolean) {
      initialStateBoolean = true
    }
  }
}}});

export const { toogleTheme, init } = themesSlice.actions

export const themesReducer = themesSlice.reducer