import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk("project", async (token) => {
  const res = await axios.get("https://note-b.herokuapp.com/project", {
    headers: { authorization: token },
  });
  return res.data;
});

export const addNewProject = createAsyncThunk(
  "project",
  async ({ token, name }) => {
    console.log("s");
    const res = await axios("https://note-b.herokuapp.com/project", {
      method: "POST",
      headers: { authorization: token },
      data: { name },
    });
    return res.data;
  }
);

export const updateProject = createAsyncThunk(
  "project",
  async ({ token, _id, newName }) => {
    const res = await axios(`https://note-b.herokuapp.com/project/${_id}`, {
      method: "PUT",
      headers: { authorization: token },
      data: { name: newName },
    });
    return res.data;
  }
);

export const deleteProject = createAsyncThunk(
  "project",
  async ({ token, _id }) => {
    const res = await axios(`https://note-b.herokuapp.com/project/${_id}`, {
      method: "DELETE",
      headers: { authorization: token },
    });
    return res.data;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload;
      state.pending = false;
    },
    [fetchProjects.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default projectSlice.reducer;
