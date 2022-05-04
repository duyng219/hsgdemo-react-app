import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSwitchList } from "../../../redux/slices/switchSlice";
import convertVND from "../../../utils/settings/convertVND";
import { Image } from "antd";
import error from "../../../assets/images/error.png";
import { NavLink } from "react-router-dom";

const SwitchManagement = () => {
  const { switchList } = useSelector((state) => state.switch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSwitchList());
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
      title: "Tên công tắc",
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
            <NavLink to={`/admin/switch/update-switch/${record.id}`}>
              <Button type="primary">Cập nhật</Button>
            </NavLink>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={switchList} columns={columns} />;
};

export default SwitchManagement;
