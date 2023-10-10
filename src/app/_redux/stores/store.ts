"use client";
import { configureStore } from "@reduxjs/toolkit";
import courseReducer, { CourseState } from "../reducers/home/course";
import homeDesignReducer, {
  HomeDesignState,
} from "../reducers/home/homeDesign";

export interface RootState {
  course: CourseState;
  homeDesign: HomeDesignState;
}

export default configureStore({
  reducer: {
    course: courseReducer,
    homeDesign: homeDesignReducer,
  },
});
