import React from "react";
import NoteList from "../components/NoteList";
import ProjectList from "../components/ProjectList";
import { NotesRoot } from "../components/styled.components";
import { ToastProvider } from "react-toast-notifications";

const Notes = () => {
  return (
    <ToastProvider>
      <NotesRoot>
        <ProjectList />
        <NoteList />
      </NotesRoot>
    </ToastProvider>
  );
};

export default Notes;
