import React, { useEffect, useState } from "react";
import { productService } from "../../../services/ProductService";
import { typeOfProductService } from "../../../services/TypeOfProductService";
import { notiFunc } from "../../../utils/settings/notification/notiFunc";

const CreateProduct = () => {
  const [typesOfProduct, setTypesOfProduct] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    quantity: "",
    price: "",
    typeOfProduct: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await productService.createNewProduct({
        name: inputValue.name,
        quantity: inputValue.quantity,
        price: inputValue.price,
        typeOfProduct: inputValue.typeOfProduct,
      });
      notiFunc("success", "Tạo sản phẩm thành công");
    } catch (error) {
      notiFunc("error", "Tạo sản phẩm không thành công. Vui lòng kiểm tra lại");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
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

  return (
    <div className="limiter modal-dialog" role="document">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form onSubmit={handleCreate} className="login100-form validate-form">
            <span className="login100-form-title p-b-30">
              Create new product
            </span>
            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">Tên sản phẩm</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Tên sản phẩm"
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
                    <option key={index} value={item.id}>
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
                <button onClick={handleCreate} className="login100-form-btn">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
