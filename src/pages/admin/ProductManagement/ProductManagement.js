import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { getAllProductList } from "../../../redux/slices/productSlice";
import { productService } from "../../../services/ProductService";
import convertVND from "../../../utils/settings/convertVND";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";

const ProductManagement = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleDeleteProduct = async (id) => {
    try {
      await productService.deleteProduct(id);
      dispatch(getAllProductList());
      notiFunc("success", "Xóa thành công");
    } catch (error) {
      notiFunc("error", "Xóa không thành công. Vui lòng kiểm tra lại");
    }
  };

  useEffect(() => {
    dispatch(getAllProductList());
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
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (data) => convertVND(data),
    },

    {
      title: "Loại sản phẩm",
      dataIndex: ["typeOfProduct", "tenLoaiSP"],
      key: ["typeOfProduct", "tenLoaiSP"],
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              onClick={() => handleDeleteProduct(record.id)}
              style={{ marginRight: 10 }}
              type="primary"
              danger
            >
              Xóa
            </Button>
            <NavLink to={`/admin/product/${record.id}`}>
              <Button type="primary">Cập nhật</Button>
            </NavLink>
          </div>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={productList} columns={columns} />;
};

export default ProductManagement;
