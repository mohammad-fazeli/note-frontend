import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginRoot } from "../components/styled.components";
import { signIn } from "../redux/userSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";

const SignIn = () => {
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

  const handleSignIn = ({ name, email, password }) => {
    Dispatch(
      signIn({
        name,
        email,
        password,
      })
    );
  };

  const validate = Yup.object({
    name: Yup.string()
      .min(3, "name must be more than 3 characters")
      .max(15, "name must be less than 15 characters")
      .required("name is required"),
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
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSignIn}
        validationSchema={validate}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className="form">
            <div className="header">
              <span>Sign in</span>
            </div>
            <div className="main">
              <div>
                <label htmlFor="name">name</label>
                <TextField
                  name="name"
                  type="text"
                  id="name"
                  placeholder="NAME"
                  className={
                    formik.errors.name && formik.touched.name && "error"
                  }
                />
              </div>
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
              <button type="submit">Sign in</button>
            </div>

            <div className="footer">
              <Link to="/login">dont have acount</Link>
            </div>
          </Form>
        )}
      </Formik>
    </LoginRoot>
  );
};

export default SignIn;
