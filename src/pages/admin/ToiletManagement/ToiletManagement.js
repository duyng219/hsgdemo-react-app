import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllToiletList } from "../../../redux/slices/toiletSlice";
import convertVND from "../../../utils/settings/convertVND";
import { Image } from "antd";
import error from "../../../assets/images/error.png";
import { NavLink } from "react-router-dom";

const ToiletManagement = () => {
  const { toiletList } = useSelector((state) => state.toilet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllToiletList());
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
      title: "Tên",
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
            <NavLink to={`/admin/toilet/update-toilet/${record.id}`}>
              <Button type="primary">Cập nhật</Button>
            </NavLink>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={toiletList} columns={columns} />;
};

export default ToiletManagement;
