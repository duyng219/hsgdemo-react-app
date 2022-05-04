import React, { useState, useEffect } from "react";
import { userService } from "../../../services/UserServices";
import { useParams } from "react-router-dom";
import history from "../../../history";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser, updateUser } from "../../../redux/slices/userSlice";

const UpdateUser = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        inputValue,
      })
    );
  };

  useEffect(() => {
    dispatch(getOneUser(id));
    setInputValue({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }, [dispatch, id, user.name, user.email, user.isAdmin]);

  return (
    <div className="limiter modal-dialog" role="document">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form onSubmit={handleUpdate} className="login100-form validate-form">
            <span className="login100-form-title p-b-30">Update user</span>
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
                value={inputValue.name}
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
                value={inputValue.email}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                name="isAdmin"
                onChange={() =>
                  setInputValue({ ...inputValue, isAdmin: !inputValue.isAdmin })
                }
                checked={inputValue.isAdmin}
                type="checkbox"
              />
              <div style={{ marginLeft: 5 }}>Admin</div>
            </div>
            <div className="text-right p-t-8 p-b-10"></div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button onClick={handleUpdate} className="login100-form-btn">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
