import React, { useState } from "react";
import { NoteRoot } from "./styled.components";
import TaskList from "./TaskList";
import {
  FaTrash,
  FaPlusSquare,
  FaPlus,
  FaRegTimesCircle,
} from "react-icons/fa";

const Note = ({
  colors,
  note: { _id, title, color, tasks },
  handleUpdateNote,
  handleDeleteNote,
  handleAddTask,
}) => {
  const [noteTitle, setNoteTitle] = useState(title);
  const [newTaskFiled, setNewTaskFiled] = useState(false);
  const [text, setText] = useState("");
  const updateNote = (color) => {
    handleUpdateNote({ title: noteTitle, color, _id });
  };
  const addTask = (e) => {
    e.preventDefault();
    handleAddTask(_id, text);
    setNewTaskFiled(false);
    setText("");
  };
  return (
    <NoteRoot color={color}>
      <div className="note__header">
        <input
          type="text"
          placeholder="enter title"
          value={noteTitle}
          onBlur={() => updateNote(color)}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
        />
      </div>
      <div className="main">
        <TaskList tasks={tasks} />
        {newTaskFiled && (
          <div className="add-task">
            <form onSubmit={addTask}>
              <input
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </form>
            <div>
              <FaPlus onClick={addTask} className="icon" />
              <FaRegTimesCircle
                className="icon"
                onClick={() => {
                  setText("");
                  setNewTaskFiled(false);
                }}
              />
            </div>
          </div>
        )}
        <div>
          <FaPlusSquare
            className="add_task"
            onClick={() => {
              setNewTaskFiled(true);
            }}
          />
        </div>
      </div>
      <div className="note__footer">
        <FaTrash
          className="delete_icon"
          onClick={() => {
            handleDeleteNote(_id);
          }}
        />
        {colors.map((color, index) => (
          <div
            style={{ backgroundColor: color }}
            onClick={() => {
              updateNote(color);
            }}
            key={index}
          ></div>
        ))}
      </div>
    </NoteRoot>
  );
};

export default Note;
