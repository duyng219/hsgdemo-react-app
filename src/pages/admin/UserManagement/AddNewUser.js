import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../redux/slices/userSlice";

const AddNewUser = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(userRegister(inputValue));
  };

  return (
    <div className="limiter modal-dialog" role="document">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form
            onSubmit={handleRegister}
            className="login100-form validate-form"
          >
            <span className="login100-form-title p-b-30">Add new user</span>
            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Full name is reauired"
            >
              <span className="label-input100">Full name</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Full name"
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Email is reauired"
            >
              <span className="label-input100">Email</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Type your email"
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Password is required"
            >
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <span className="label-input100">Confirm Password</span>
              <input
                className="input100"
                type="password"
                placeholder="Confirm your password"
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="text-right p-t-8 p-b-10"></div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button onClick={handleRegister} className="login100-form-btn">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
