import React from "react";
import Task from "./Task";
import { TaskListRoot } from "./styled.components";
const TaskList = ({ tasks }) => {
  return (
    <TaskListRoot>
      {tasks.map((task) => (
        <Task key={task._id} _id={task._id} text={task.text} done={task.done} />
      ))}
    </TaskListRoot>
  );
};

export default TaskList;
