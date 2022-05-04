import { baseService } from "./baseService";

export class ProductService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllProducts = () => {
    return this.get("/api/products");
  };

  getOneProduct = (id) => {
    return this.get(`/api/products/${id}`);
  };

  deleteProduct = (id) => {
    return this.delete(`/api/products/${id}`);
  };

  createNewProduct = (dataInfo) => {
    return this.post("/api/products", dataInfo);
  };

  updateProduct = (id, dataInfo) => {
    return this.put(`/api/products/${id}`, dataInfo);
  };
}

export const productService = new ProductService();
