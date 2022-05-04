import { baseService } from "./baseService";

export class ToiletService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllToilet = () => {
    return this.get("/api/toilet");
  };
  getOneToilet = (id) => {
    return this.get(`/api/toilet/${id}`);
  };

  deleteToilet = (id) => {
    return this.delete(`/api/toilet/${id}`);
  };

  updateToilet = (id, data) => {
    return this.put(`/api/toilet/${id}`, data);
  };

  createToilet = (data) => {
    return this.post(`/api/toilet`, data);
  };
}

export const toiletService = new ToiletService();
