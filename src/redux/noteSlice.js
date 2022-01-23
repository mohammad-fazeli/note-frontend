import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotes = createAsyncThunk("note", async ({ token, _id }) => {
  const res = await axios.get(`https://note-b.herokuapp.com/note/${_id}`, {
    headers: { authorization: token },
  });
  return res.data;
});

export const addNewNote = createAsyncThunk(
  "note",
  async ({ token, project_id, color }) => {
    const res = await axios("https://note-b.herokuapp.com/note/", {
      method: "POST",
      headers: { authorization: token },
      data: { title: "no title", color, project_id },
    });
    return res.data;
  }
);

export const updateNote = createAsyncThunk(
  "note",
  async ({ token, _id, color, title }) => {
    const res = await axios(`https://note-b.herokuapp.com/note/${_id}`, {
      method: "PUT",
      headers: { authorization: token },
      data: { title, color },
    });
    return res.data;
  }
);

export const deleteNote = createAsyncThunk("note", async ({ token, _id }) => {
  const res = await axios(`https://note-b.herokuapp.com/note/${_id}`, {
    method: "DELETE",
    headers: { authorization: token },
  });
  return res.data;
});

export const addNewTask = createAsyncThunk(
  "note",
  async ({ token, id, text }) => {
    const res = await axios("https://note-b.herokuapp.com/note/task", {
      method: "POST",
      headers: { authorization: token },
      data: { text, id },
    });
    return res.data;
  }
);
export const updateTask = createAsyncThunk(
  "note",
  async ({ token, id, text, done }) => {
    const res = await axios("https://note-b.herokuapp.com/note/task", {
      method: "PUT",
      headers: { authorization: token },
      data: { text, id, done },
    });
    return res.data;
  }
);
export const deleteTask = createAsyncThunk("note", async ({ token, _id }) => {
  const res = await axios(`https://note-b.herokuapp.com/note/task/${_id}`, {
    method: "DELETE",
    headers: { authorization: token },
  });
  return res.data;
});

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchNotes.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
      state.pending = false;
    },
    [fetchNotes.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default noteSlice.reducer;
