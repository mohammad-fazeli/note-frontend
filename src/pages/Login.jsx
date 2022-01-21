import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginRoot } from "../components/styled.components";
import { login } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const isLogin = useSelector(
    (state) => state.user.user.name && state.user.user.token
  );
  useEffect(() => {
    if (isLogin && email && password) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    Dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <LoginRoot>
      <form onSubmit={handleLogin}>
        <header>
          <span>Login</span>
        </header>
        <main>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="please enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="please enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">Login</button>
        </main>
        <footer>
          <Link to="/signin">dont have acount</Link>
        </footer>
      </form>
    </LoginRoot>
  );
};

export default Login;
