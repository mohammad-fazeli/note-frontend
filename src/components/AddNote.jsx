import React from "react";
import { AddNoteRoot } from "./styled.components";
import { FaPlus } from "react-icons/fa";

const AddNote = ({ addNewNote }) => {
  return (
    <AddNoteRoot>
      <FaPlus className="icon" onClick={addNewNote} />
    </AddNoteRoot>
  );
};

export default AddNote;
