import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginRoot } from "../components/styled.components";
import { login } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";

const Login = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const isLogin = useSelector(
    (state) => state.user.user.name && state.user.user.token
  );
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const handleLogin = ({ email, password }) => {
    Dispatch(login({ email, password }));
  };

  const validate = Yup.object({
    email: Yup.string()
      .email("email is not valid")
      .required("email is required"),
    password: Yup.string()
      .min(6, "password must be more than 6 characters")
      .max(15, "password must be less than 15 characters")
      .required("password is required"),
  });

  return (
    <LoginRoot>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validate}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className="form">
            <div className="header">
              <span>Login</span>
            </div>
            <div className="main">
              <div>
                <label htmlFor="email">email</label>
                <TextField
                  name="email"
                  type="text"
                  id="email"
                  placeholder="EMAIL"
                  className={
                    formik.errors.email && formik.touched.email && "error"
                  }
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <TextField
                  name="password"
                  type="password"
                  id="password"
                  placeholder="PASSWORD"
                  className={
                    formik.errors.password && formik.touched.password && "error"
                  }
                />
              </div>
              <button type="submit">Login</button>
            </div>

            <div className="footer">
              <Link to="/signin">dont have acount</Link>
            </div>
          </Form>
        )}
      </Formik>
    </LoginRoot>
  );
};

export default Login;
