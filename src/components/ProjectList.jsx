import React, { useEffect, useState, useRef } from "react";
import { ProjectListRoot } from "./styled.components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import {
  fetchProjects,
  addNewProject,
  deleteProject,
  updateProject,
} from "../redux/projectSlice";
import ProjectItem from "./ProjectItem";
import { FaPlus, FaRegTimesCircle } from "react-icons/fa";

const ProjectList = () => {
  const [addFiled, setAddFiled] = useState(false);
  const [projectName, setProjectName] = useState("");
  const projects = useSelector((state) => state.project.projects);
  const { name, token } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const inputEl = useRef(null);

  const handleLogOut = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(fetchProjects(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (addFiled) {
      inputEl.current.focus();
    }
  }, [addFiled]);

  const addProject = () => {
    if (projectName) {
      dispatch(addNewProject({ token, name: projectName }));
      cancelAdd();
    }
  };
  const cancelAdd = () => {
    setProjectName("");
    setAddFiled(false);
  };
  const handleDelete = (_id) => {
    dispatch(deleteProject({ token, _id }));
  };

  const handleUpdate = (_id, newName) => {
    dispatch(updateProject({ token, _id, newName }));
  };
  const showAddFiled = () => {
    setAddFiled(true);
  };

  return (
    <ProjectListRoot>
      <div className="menu">menu</div>
      <div className="information">
        <span>{name}</span>
        <button onClick={handleLogOut}>log out</button>
      </div>

      <button onClick={showAddFiled}>add new project</button>
      {projects.map((project) => (
        <ProjectItem
          name={project.name}
          _id={project._id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          key={project._id}
        />
      ))}
      {addFiled && (
        <div className="add">
          <input
            type="text"
            placeholder="name a project"
            ref={inputEl}
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
          <div>
            <FaRegTimesCircle onClick={cancelAdd} />
            <FaPlus onClick={addProject} />
          </div>
        </div>
      )}
    </ProjectListRoot>
  );
};

export default ProjectList;
