"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeDesignState {
  isScreenBlack: boolean;
}

const homeDesignSlice = createSlice({
  name: "homeDesign",
  initialState: {
    isScreenBlack: false,
  } as HomeDesignState,
  reducers: {
    setIsScreenBlack: (
      state: HomeDesignState,
      action: PayloadAction<HomeDesignState>
    ) => {
      state = { ...state, isScreenBlack: action.payload.isScreenBlack };
      return state;
    },
  },
});

export const { setIsScreenBlack } = homeDesignSlice.actions;
export default homeDesignSlice.reducer;
