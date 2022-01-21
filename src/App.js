import "./App.css";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          }
        />
        <Route
          path="/:id"
          element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
