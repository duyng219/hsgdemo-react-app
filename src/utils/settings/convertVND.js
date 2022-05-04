import { Tag } from "antd";
import React from "react";

const convertVND = (price) => {
  return (
    <Tag style={{ fontSize: 15 }} color="#87d068">
      {Number(price || 0).toLocaleString()}đ
    </Tag>
  );
};

export default convertVND;
