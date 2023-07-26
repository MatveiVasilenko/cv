import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

export enum TDisplaingModule {
  CONTACTS = 'contacts',
  PROJECTS = 'projects',
  SITES = 'sites',
}

type TInitialState = {
  darkMode: boolean;
  mainPage: boolean;
  displaingMobileModule: `${TDisplaingModule}` | false;
}

const initialState: TInitialState = {
  darkMode: false,
  mainPage: true,
  displaingMobileModule: false,
}

const coreSlice = createSlice({
  initialState,
  name: 'coreSlice',
  reducers: {
    setMainPage: (state, action: {
      payload: boolean;
    }) => {
      state.mainPage = action.payload;
    },
    setDisplaingMobileModule: (state, action: {
      payload: TInitialState['displaingMobileModule'];
    }) => {
      state.displaingMobileModule = action.payload;
    }
  }
});

export const {
  setMainPage,
  setDisplaingMobileModule,
} = coreSlice.actions;

export const selectDarkMode = (state: RootState) => state.coreSlice.darkMode;
export const selectMainPage = (state: RootState) => state.coreSlice.mainPage;
export const selectDisplaingMobileModule = (state: RootState) => state.coreSlice.displaingMobileModule;

export default coreSlice.reducer;
