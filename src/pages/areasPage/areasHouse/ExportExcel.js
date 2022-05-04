import { Button } from "antd";
import React from "react";
import { CSVLink } from "react-csv";

const ExportExcel = ({ data }) => {
  return (
    <CSVLink data={data}>
      <Button type="primary" style={{ marginTop: 15 }}>
        Xuất dữ liệu
      </Button>
    </CSVLink>
  );
};

export default ExportExcel;
