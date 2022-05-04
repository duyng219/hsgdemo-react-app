import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoorList } from "../../../redux/slices/doorSlice";
import { doorService } from "../../../services/DoorService";
import convertVND from "../../../utils/settings/convertVND";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";
import { Image } from "antd";
import error from "../../../assets/images/error.png";
import { NavLink } from "react-router-dom";

const DoorManagement = () => {
  const { doorList } = useSelector((state) => state.door);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await doorService.deleteDoor(id);
      dispatch(getAllDoorList());
      notiFunc("success", "Xóa thành công");
    } catch (error) {
      notiFunc("error", "Xóa không thành công");
    }
  };
  useEffect(() => {
    dispatch(getAllDoorList());
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
      title: "Tên cửa",
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
            <Button
              onClick={() => handleDelete(record.id)}
              style={{ marginRight: 10 }}
              type="primary"
              danger
            >
              Xóa
            </Button>
            <NavLink to={`/admin/door/update-door/${record.id}`}>
              <Button type="primary">Cập nhật</Button>
            </NavLink>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={doorList} columns={columns} />;
};

export default DoorManagement;
