import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getOneInteriorBrick,
  updateInteriorBrick,
} from "../../../redux/slices/interiorBrickSlice";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/firebaseConnect";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";

const UpdateInteriorBrick = () => {
  const [urlImage, setUrlImage] = useState("");
  const { id } = useParams();
  const { interiorBrick } = useSelector((state) => state.interiorBrick);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    name: interiorBrick.name,
    price: interiorBrick.price,
    image: urlImage,
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
      updateInteriorBrick({
        id,
        inputValue,
      })
    );
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setUrlImage(url);
    if (!url) return;
    const storageRef = ref(
      storage,
      `/hoasen/images/interiorBrick/${file.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_change",
      (snapshot) => {},
      (err) => notiFunc("error", "Tải ảnh thất bại"),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrlImage(url);
          setInputValue({ ...inputValue, image: url });
        }, notiFunc("success", "Tải ảnh thành công"));
      }
    );
  };

  useEffect(() => {
    dispatch(getOneInteriorBrick(id));
    setInputValue({
      name: interiorBrick.name,
      price: interiorBrick.price,
      image: interiorBrick.image,
    });
    setUrlImage(interiorBrick.image);
  }, [
    dispatch,
    id,
    interiorBrick.name,
    interiorBrick.price,
    interiorBrick.image,
  ]);

  return (
    <div className="limiter modal-dialog" role="document">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form onSubmit={handleUpdate} className="login100-form validate-form">
            <span className="login100-form-title p-b-30">
              Update interiorBrick
            </span>
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
              data-validate="Price is reauired"
            >
              <span className="label-input100">Price</span>
              <input
                className="input100"
                type="text"
                name="price"
                placeholder="Type your price"
                onChange={handleChange}
                value={inputValue.price}
              />
              <span className="focus-input100" data-symbol="" />
            </div>

            <input type="file" name="image" onChange={handleUpload} />

            {urlImage && <img src={urlImage} alt="imageItem" />}

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

export default UpdateInteriorBrick;