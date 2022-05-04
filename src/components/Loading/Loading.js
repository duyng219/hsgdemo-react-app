import React from "react";
import loading from "../../assets/images/loading/loading2.gif";
import style from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={style.bgLoading}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
