import React, { useState } from "react";
import { TaskRoot } from "./styled.components";
import { FaTrash, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/noteSlice";

const Task = ({ _id, text, done }) => {
  const [textTask, setTextTask] = useState(text);

  const { token } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({ _id, token }));
  };

  const handleUpdateTask = (newDone = done) => {
    dispatch(updateTask({ token, id: _id, text: textTask, done: newDone }));
  };
  return (
    <TaskRoot>
      <div>
        {done ? (
          <FaRegCheckSquare
            className="check_box"
            onClick={() => {
              handleUpdateTask(false);
            }}
          />
        ) : (
          <FaRegSquare
            className="check_box"
            onClick={() => {
              handleUpdateTask(true);
            }}
          />
        )}
        <input
          type="text"
          className={done ? "done" : ""}
          value={textTask}
          onBlur={() => {
            handleUpdateTask();
          }}
          onChange={(e) => {
            setTextTask(e.target.value);
          }}
        />
      </div>
      <FaTrash className="check_box" onClick={handleDeleteTask} />
    </TaskRoot>
  );
};

export default Task;
