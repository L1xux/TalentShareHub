"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CourseState {
  id: number;
  img: string;
  title: string;
  teacher: string;
  startDate: Date | null;
  endDate: Date | null;
  rating: number;
  maxCapacity: number;
  currentCapacity: number;
}

const courseSlice = createSlice({
  name: "course",
  initialState: {
    id: -1,
    img: "",
    title: "",
    summary: "",
    teacher: "",
    startDate: null,
    endDate: null,
    rating: 0,
    maxCapacity: 1,
    currentCapacity: 0,
  } as CourseState,
  reducers: {
    update: (state: CourseState, action: PayloadAction<CourseState>) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { update } = courseSlice.actions;
export default courseSlice.reducer;
