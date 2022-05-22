import { Dispatch } from "@reduxjs/toolkit";
import {
  createSelectorHook,
  useDispatch as useReduxDispatch,
} from "react-redux";

import { RootState } from "./reducer";

export const useDispatch = () => useReduxDispatch<Dispatch>();
export const useSelector = createSelectorHook<RootState>();
