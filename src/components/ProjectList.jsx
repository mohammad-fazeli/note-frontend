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
import { clearNotes } from "../redux/noteSlice";
import ProjectItem from "./ProjectItem";
import { FaPlus, FaRegTimesCircle, FaBars, FaTimes } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [addFiled, setAddFiled] = useState(false);
  const [projectName, setProjectName] = useState("");
  const projects = useSelector((state) => state.project.projects);
  const { name, token } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

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
  const handleDelete = async (_id) => {
    await dispatch(deleteProject({ token, _id }));
    if (_id === id) {
      navigate("/");
      dispatch(clearNotes());
    }
  };

  const handleUpdate = (_id, newName) => {
    dispatch(updateProject({ token, _id, newName }));
  };
  const showAddFiled = () => {
    setAddFiled(true);
  };

  return (
    <ProjectListRoot openMenu={openMenu}>
      <div className="menu">
        <div className="menuIcon">
          {openMenu ? (
            <FaTimes
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          ) : (
            <FaBars
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          )}
        </div>
        <div>{name}</div>
        <button className="logout" onClick={handleLogOut}>
          log out
        </button>
      </div>
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
