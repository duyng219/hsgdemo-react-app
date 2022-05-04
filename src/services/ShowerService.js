import { baseService } from "./baseService";

export class ShowerService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllShower = () => {
    return this.get("/api/shower");
  };
  getOneShower = (id) => {
    return this.get(`/api/shower/${id}`);
  };

  deleteShower = (id) => {
    return this.delete(`/api/shower/${id}`);
  };

  updateShower = (id, data) => {
    return this.put(`/api/shower/${id}`, data);
  };

  createShower = (data) => {
    return this.post(`/api/shower`, data);
  };
}

export const showerService = new ShowerService();
