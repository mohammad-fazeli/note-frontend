import React, { useState } from "react";
import { ProjectItemRoot } from "./styled.components";
import { FaTrash, FaCheck, FaRegTimesCircle, FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProjectItem = ({ name, _id, handleDelete, handleUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(name);
  return (
    <ProjectItemRoot>
      {isEdit ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      ) : (
        <NavLink
          to={"/" + _id}
          className="item"
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        >
          {name}
        </NavLink>
      )}

      <div>
        {!isEdit ? (
          <>
            <FaEdit
              className="icon"
              onClick={() => {
                setIsEdit(true);
              }}
            />
            <FaTrash
              className="icon"
              onClick={() => {
                handleDelete(_id);
              }}
            />
          </>
        ) : (
          <>
            <FaCheck
              className="icon"
              onClick={() => {
                handleUpdate(_id, newName);
                setIsEdit(false);
              }}
            />
            <FaRegTimesCircle
              className="icon"
              onClick={() => {
                setIsEdit(false);
              }}
            />
          </>
        )}
      </div>
    </ProjectItemRoot>
  );
};

export default ProjectItem;
