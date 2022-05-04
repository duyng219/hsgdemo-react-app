import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSteelPipeList } from "../../../redux/slices/steelPipeSlice";
import convertVND from "../../../utils/settings/convertVND";
import { Image } from "antd";
import error from "../../../assets/images/error.png";

const SteelPipeManagement = () => {
  const { steelPipeList } = useSelector((state) => state.steelPipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSteelPipeList());
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
      title: "Hình ảnh ",
      dataIndex: "image",
      key: "image",
      render: (data) => {
        return <Image width={90} src={data || error} />;
      },
    },
    {
      title: "Tên ống",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (data) => convertVND(data),
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

  return <Table rowKey="id" dataSource={steelPipeList} columns={columns} />;
};

export default SteelPipeManagement;
