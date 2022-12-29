import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/authSlice";
import registrationsSlice from "../Slice/registrationsSlice";

export const store = configureStore({
    reducer: {
        registrationsReducer: registrationsSlice,
        authReducer: authSlice,
    },
  });