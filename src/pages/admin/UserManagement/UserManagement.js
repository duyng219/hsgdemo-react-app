import { Button, Checkbox, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteUser, getAllUserList } from "../../../redux/slices/userSlice";

const UserManagement = () => {
  const { userList } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getAllUserList());
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      key: "isAdmin",
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
            <Button
              onClick={() => handleDeleteUser(record.id)}
              style={{ marginRight: 10 }}
              type="primary"
              danger
            >
              Xóa
            </Button>
            <NavLink to={`/admin/user/update-user/${record.id}`}>
              <Button style={{ marginRight: 10 }} type="primary">
                Cập nhật
              </Button>
            </NavLink>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table rowKey="id" dataSource={userList} columns={columns} />
    </div>
  );
};

export default UserManagement;
