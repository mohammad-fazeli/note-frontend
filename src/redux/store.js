import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import noteSlice from "./noteSlice";
import projectSlice from "./projectSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    note: noteSlice,
    project: projectSlice,
  },
});
