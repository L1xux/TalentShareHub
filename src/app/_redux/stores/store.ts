"use client";
import { configureStore } from "@reduxjs/toolkit";
import courseReducer, { CourseState } from "../reducers/course";

export interface ReducerState {
  course: CourseState;
}

export default configureStore({
  reducer: {
    course: courseReducer,
  },
});
