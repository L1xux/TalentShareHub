"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CourseState {
  id: number;
  img?: string;
  title?: string;
  summary?: string;
  teacher: string;
  startDate?: Date | null;
  endDate?: Date | null;
  maxCapacity?: number;
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
    maxCapacity: 1,
  } as CourseState,
  reducers: {
    update: (state: CourseState, action: PayloadAction<CourseState>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { update } = courseSlice.actions;
export default courseSlice.reducer;
