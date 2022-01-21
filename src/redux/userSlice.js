import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk("user", async (user) => {
  const body = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  const res = await axios.post(
    "https://note-b.herokuapp.com/user/signup",
    body
  );
  return res.data;
});

export const login = createAsyncThunk("user", async (user) => {
  const body = {
    email: user.email,
    password: user.password,
  };
  const res = await axios.post("https://note-b.herokuapp.com/user/login", body);
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {
      name: "",
      token: "",
    },
    pending: false,
    error: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = { name: "", token: "" };
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [signIn.fulfilled]: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      state.pending = false;
    },
    [signIn.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
