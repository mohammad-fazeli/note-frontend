import React from "react";
import NoteList from "../components/NoteList";
import ProjectList from "../components/ProjectList";
import { NotesRoot } from "../components/styled.components";

const Notes = () => {
  return (
    <NotesRoot>
      <ProjectList />
      <NoteList />
    </NotesRoot>
  );
};

export default Notes;
