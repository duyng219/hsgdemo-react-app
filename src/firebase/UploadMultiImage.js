import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebaseConnect";

const UploadMultiImage = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [imagesUrl, setImageUrl] = useState([]);

  console.log("imagesUrl", imagesUrl);
  console.log("imageFiles", imageFiles);

  const handleChange = async (e) => {
    const files = e.target.files;

    if (!!files) {
      let filesUrl = [];
      let filesArr = [];
      for (let item of files) {
        filesUrl.push(URL.createObjectURL(item));
        filesArr.push(item);
      }
      setImageUrl(() => [...imagesUrl, ...filesUrl]);
      setImageFiles(() => [...imageFiles, ...filesArr]);
    }
  };

  const handleUpload = () => {
    const urlUpdated = imagesUrl.filter((item) =>
      item.includes("firebasestorage")
    );
    const urls = [];
    imageFiles.map((image) => {
      const storageRef = ref(storage, `/hoasen/images/multi/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_change",
        (snapshot) => {},
        (err) => console.log("Upload thất bại"),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            urls.push(url);
            if (urls.length === imageFiles.length) {
              setImageUrl(() => [...urls, ...urlUpdated]);
              setImageFiles([]);
              console.log("Upload thành công");
            }
          });
        }
      );
    });
  };

  return (
    <div>
      <input onChange={handleChange} type="file" multiple />
      <div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadMultiImage;
