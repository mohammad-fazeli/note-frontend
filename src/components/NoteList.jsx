import React, { useEffect } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import { NoteListRoot } from "./styled.components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchNotes,
  addNewNote,
  updateNote,
  deleteNote,
  addNewTask,
} from "../redux/noteSlice";
import { useToasts } from "react-toast-notifications";

const colors = [
  "#FFDA79",
  "#F8A5C2",
  "#F3A683",
  "#1ABC9C",
  "#34ACE0",
  "#63CDDA",
  "#778beb",
  "#DBE6FF",
];
const NoteList = () => {
  const { addToast } = useToasts();
  const { id } = useParams();
  const notes = useSelector((state) => state.note.notes);
  const { token } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchNotes({ _id: id, token }));
    }
  }, [dispatch, id, token]);

  const handleAddNewNote = () => {
    dispatch(addNewNote({ token, project_id: id, color: colors[0] }))
      .then(() => {
        addToast("Add Successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      })
      .catch(() => {
        addToast("Add not Successfully", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };
  const handleUpdateNote = ({ title, color, _id }) => {
    dispatch(updateNote({ _id, title, color, token }))
      .then(() => {
        addToast("Save Successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      })
      .catch(() => {
        addToast("error", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };
  const handleDeleteNote = (_id) => {
    dispatch(deleteNote({ _id, token }))
      .then(() => {
        addToast("Delete Successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      })
      .catch(() => {
        addToast("Delete not Successfully", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };
  const handleAddTask = (id, text) => {
    dispatch(addNewTask({ id, text, token }))
      .then(() => {
        addToast("Add Successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      })
      .catch(() => {
        addToast("Add not Successfully", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };

  return (
    <NoteListRoot>
      {notes.map((note) => (
        <Note
          colors={colors}
          note={note}
          handleUpdateNote={handleUpdateNote}
          handleDeleteNote={handleDeleteNote}
          handleAddTask={handleAddTask}
          key={note._id}
        />
      ))}
      {id && <AddNote addNewNote={handleAddNewNote} />}
    </NoteListRoot>
  );
};

export default NoteList;
