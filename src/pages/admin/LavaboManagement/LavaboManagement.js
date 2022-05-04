import { Button, Image, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLavaboList } from "../../../redux/slices/lavaboSlice";
import { lavaboService } from "../../../services/LavaboService";
import convertVND from "../../../utils/settings/convertVND";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";
import error from "../../../assets/images/error.png";

const LavaboManagement = () => {
  const { lavaboList } = useSelector((state) => state.lavabo);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await lavaboService.deleteLavabo(id);
      dispatch(getAllLavaboList());
      notiFunc("success", "Xóa thành công");
    } catch (error) {
      notiFunc("error", "Xóa không thành công");
    }
  };

  useEffect(() => {
    dispatch(getAllLavaboList());
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
      title: "Tên ",
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
            <NavLink to={`/admin/lavabo/update-lavabo/${record.id}`}>
              <Button type="primary">Cập nhật</Button>
            </NavLink>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={lavaboList} columns={columns} />;
};

export default LavaboManagement;
