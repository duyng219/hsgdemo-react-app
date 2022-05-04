import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productService } from "../../../services/ProductService";
import { typeOfProductService } from "../../../services/TypeOfProductService";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";

const UpdateProduct = () => {
  const { id } = useParams();
  const [typesOfProduct, setTypesOfProduct] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    quantity: "",
    price: "",
    typeOfProduct: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await productService.updateProduct(id, inputValue);
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      notiFunc("error", "Cập nhật không thành công");
    }
  };

  useEffect(() => {
    typeOfProductService.getAllTypeOfProduct().then((typesOfProduct) => {
      const typeOfProductList = typesOfProduct.data;
      setInputValue({
        ...inputValue,
        typeOfProduct: typeOfProductList[0]?.id,
      });
      setTypesOfProduct(typeOfProductList);
    });
  }, []);

  useEffect(() => {
    productService.getOneProduct(id).then((product) => {
      const { name, price, quantity, typeOfProduct } = product.data;
      setInputValue({
        name,
        price,
        quantity,
        typeOfProduct: typeOfProduct.id,
      });
    });
  }, []);

  return (
    <div className="limiter modal-dialog" role="document">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form onSubmit={handleUpdate} className="login100-form validate-form">
            <span className="login100-form-title p-b-30">Update product</span>
            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">Tên sản phẩm</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Tên sản phẩm"
                value={inputValue.name}
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">Số lượng</span>
              <input
                className="input100"
                type="text"
                name="quantity"
                placeholder="Số lượng"
                value={inputValue.quantity}
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">Giá</span>
              <input
                className="input100"
                name="price"
                placeholder="Giá"
                value={inputValue.price}
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="wrap-input100 validate-input">
              <span className="label-input100">Loại sản phẩm</span>
              <select
                name="typeOfProduct"
                style={{ border: "none" }}
                className="input100"
                onChange={handleChange}
              >
                {typesOfProduct?.map((item, index) => {
                  return (
                    <option
                      selected={inputValue.typeOfProduct === item.id}
                      key={index}
                      value={item.id}
                    >
                      {item.tenLoaiSP}
                    </option>
                  );
                })}
              </select>
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="text-right p-t-8 p-b-10"></div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button onClick={handleUpdate} className="login100-form-btn">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
