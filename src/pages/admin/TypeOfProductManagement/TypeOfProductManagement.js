import { Button, Checkbox, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypeOfProductList } from "../../../redux/slices/typeOfProductSlice";

const TypeOfProductManagement = () => {
  const { typeList } = useSelector((state) => state.typeOfProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypeOfProductList());
  }, [dispatch]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (data) => {
        return data.slice(15) + "...";
      },
    },
    {
      title: "Tên loại sản phẩm",
      dataIndex: "tenLoaiSP",
      key: "tenLoaiSP",
    },
    {
      title: "Loại còn",
      dataIndex: "loaiCon",
      key: "loaiCon",
      render: (data) => {
        return (
          <div>
            <Checkbox disabled checked={data} />
          </div>
        );
      },
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Button style={{ marginRight: 10 }} type="primary" danger>
              Xóa
            </Button>
            <Button type="primary">Cập nhật</Button>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={typeList} columns={columns} />;
};

export default TypeOfProductManagement;
