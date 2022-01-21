import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginRoot } from "../components/styled.components";
import { signIn } from "../redux/userSlice";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const Dispatch = useDispatch();
  const isLogin = useSelector(
    (state) => state.user.user.name && state.user.user.token
  );
  useEffect(() => {
    if (isLogin && name && email && password) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    Dispatch(
      signIn({
        name,
        email,
        password,
      })
    );
  };

  return (
    <LoginRoot>
      <form onSubmit={handleSignIn}>
        <header>
          <span>sign in</span>
        </header>
        <main>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="please enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
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
          <button type="submit">sign in</button>
        </main>
        <footer>
          <Link to="/login">login to acount</Link>
        </footer>
      </form>
    </LoginRoot>
  );
};

export default SignIn;
