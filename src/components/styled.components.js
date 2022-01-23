import styled from "styled-components";

export const LoginRoot = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  .loading {
    position: absolute;
    background-color: #ecf0f16a;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    width: 25rem;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding-top: 1rem;
    .main {
      padding: 0 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      div {
        input {
          width: 100%;
          border: 1px solid #ecf0f1;
          padding: 10px;
          font-size: 1rem;
          margin-top: 5px;
          outline: none;
        }
        .error {
          border-color: #e3364e;
        }
        .error-message {
          color: #e3364e;
        }
      }

      button {
        border: none;
        outline: none;
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
        background-color: #e3364e;
        width: 100%;
        padding: 5px;
      }
      button:hover {
        background-color: #fe5a71;
      }
    }
    .header {
      font-size: 1.5rem;
    }
    .footer {
      width: 100%;
      background-color: #ecf0f1;
      text-align: center;
      padding: 0.8rem;
    }
  }
  @media (max-width: 550px) {
    .form {
      width: 90%;
    }
  }
`;
export const NoteRoot = styled.div`
  background-color: ${(props) => props.color};
  width: 17rem;
  min-height: 21rem;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 5px 5px 5px 3rem;
  color: #2c3e50;
  .note__header {
    border-bottom: 1px solid #2c3e50;
    input {
      background-color: transparent;
      width: 100%;
      padding: 5px;
      border: none;
      outline: none;
      font-size: 1.3rem;
    }
  }
  .main {
    min-height: 16rem;
    padding-top: 1rem;
    div {
      /* text-align: center; */
      .add_task {
        margin-top: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }
  .note__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    .delete_icon {
      font-size: 1.4rem;
      cursor: pointer;
    }
    div {
      width: 1.3rem;
      height: 1.3rem;
      border: 2px solid #fff;
      border-radius: 500px;
      cursor: pointer;
    }
  }
  .add-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      font-size: 1.2rem;
      padding: 0 5px;
      width: 100%;
      outline: none;
    }
    div {
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      .icon {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    .note__footer {
      .delete_icon {
        font-size: 2rem;
      }
      div {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    .main {
      div {
        .add_task {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const NoteListRoot = styled.div`
  padding: 2rem 1rem 0 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 550px) {
    padding: 4rem 1rem 0 1rem;
  }
`;
export const AddNoteRoot = styled.div`
  width: 17rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  .icon {
    border: 5px solid #2c3e50;
    border-radius: 5000rem;
    font-size: 5rem;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    height: 6rem;
    .icon {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
    }
  }
`;

export const TaskRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .check_box {
    font-size: 1.3rem;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    input {
      background: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
    }
    .done {
      text-decoration: line-through;
    }
  }
`;
export const TaskListRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProjectListRoot = styled.div`
  width: 17rem;
  height: 100vh;
  position: sticky;
  border-right: 1px solid black;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  button {
    font-size: 2rem;
    margin: 2rem 0 1rem 0;
    padding: 0.7rem 0;
    color: #ecf0f1;
    background: #95a5a6;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease all;
  }
  button:hover {
    background: #bdcacb;
    color: #34495e;
  }

  .menu {
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.7rem;
    background-color: aliceblue;
    .menuIcon {
      font-size: 1.7rem;
      cursor: pointer;
    }
    .logout {
      width: auto;
      margin: 0;
      font-size: 1.1rem;
      padding: 3px 5px;
      border-radius: 5px;
    }
  }
  .information {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin: 0;
      font-size: 1rem;
      padding: 0.2rem 0.3rem;
      border-radius: 5px;
    }
  }
  .add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    input {
      font-size: 1.3rem;
      width: 100%;
      outline: none;
      padding: 0 5px;
    }
    div {
      font-size: 1.9rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }
  @media (max-width: 550px) {
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .information {
      display: none;
    }
    position: fixed;
    left: ${(props) => (props.openMenu ? "0" : "-100%")};
    width: 100%;
    top: 3.5rem;
    border: none;
    background-color: aliceblue;
  }
`;
export const NotesRoot = styled.div`
  display: grid;
  grid-template-columns: 17rem auto;
  grid-template-rows: 1rem;
  gap: 1rem;
  @media (max-width: 550px) {
    grid-template-columns: auto;
  }
`;
export const TextListRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;
export const ProjectItemRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    font-size: 1.3rem;
    width: 100%;
  }
  .item {
    font-size: 1.3rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;
  }
  .select {
    color: red;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .icon {
    cursor: pointer;
  }
  .icon:hover {
    color: red;
  }
`;
