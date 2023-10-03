"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "./_redux/stores/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
