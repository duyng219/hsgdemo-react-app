import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebaseConnect";

const UploadImage = () => {
  const [urlImage, setUrlImage] = useState("");

  console.log("urlImage", urlImage);

  const handleUploadAvatar = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setUrlImage(url);
    if (!url) return;
    const storageRef = ref(storage, `/hoasen/images/avatar/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_change",
      (snapshot) => {},
      (err) => console.log("Upload thất bại"),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          (url) => setUrlImage(url),
          console.log("Upload thành công")
        );
      }
    );
  };

  return <input onChange={handleUploadAvatar} type="file" />;
};

export default UploadImage;
