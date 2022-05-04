import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../components/forminput/FormInput";
import { userLogin } from "../../redux/slices/userSlice";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Email not valid",
      label: "Email",
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin(values));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="register"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            values={values[input.name]}
            onChange={onChange}
          />
        ))}
        <p>
          <a href="/">Quên mật khẩu?</a>
        </p>
        <button onClick={handleSubmit}>Đăng nhập</button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
