import { baseService } from "./baseService";

export class TypeOfProductService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllTypeOfProduct = () => {
    return this.get("/api/typeOfProduct");
  };
  getOneTypeOfProduct = (id) => {
    return this.get(`/api/typeOfProduct/${id}`);
  };

  deleteTypeOfProduct = (id) => {
    return this.delete(`/api/typeOfProduct/${id}`);
  };

  updateTypeOfProduct = (id, data) => {
    return this.put(`/api/typeOfProduct/${id}`, data);
  };

  createTypeOfProduct = (data) => {
    return this.post(`/api/typeOfProduct`, data);
  };
}

export const typeOfProductService = new TypeOfProductService();
