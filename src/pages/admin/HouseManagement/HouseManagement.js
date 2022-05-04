import { Button, Image, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllHouseList } from "../../../redux/slices/houseSlice";

const HouseManagement = () => {
  const { houseList } = useSelector((state) => state.house);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHouseList());
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
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "images",
      key: "images",
      render: (data, context) => {
        return (
          <Link to={`/areas/house/${context.id}`}>
            <img
              style={{ width: 80, height: 60 }}
              src={data[0]}
              alt={context.name}
            />
          </Link>
        );
      },
    },
    {
      title: "Diện tích sàn",
      dataIndex: "floorArea",
      key: "floorArea",
      render: (data) => {
        return <Tag color="purple">{data}m²</Tag>;
      },
    },
    {
      title: "Diện tích đất",
      dataIndex: "landArea",
      key: "landArea",
      render: (data) => {
        return <Tag color="purple">{data}m²</Tag>;
      },
    },

    {
      title: "Phòng ngủ",
      dataIndex: "bedroom",
      key: "bedroom",
    },

    {
      title: "Nhà vệ sinh",
      dataIndex: "toiletNum",
      key: "toiletNum",
    },

    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              // onClick={() => handleDelete(record.id)}
              style={{ marginRight: 10 }}
              type="primary"
              danger
            >
              Xóa
            </Button>
            <Button type="primary">Cập nhật</Button>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={houseList} columns={columns} />;
};

export default HouseManagement;
