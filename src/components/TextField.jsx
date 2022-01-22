import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ type, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <input type={type} autoComplete="off" {...field} {...props} />
      <ErrorMessage
        component="div"
        className="error-message"
        name={field.name}
      />
    </div>
  );
};

export default TextField;
