import { baseService } from "./baseService";

export class PurlinService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllPurlin = () => {
    return this.get("/api/purlin");
  };
  getOnePurlin = (id) => {
    return this.get(`/api/purlin/${id}`);
  };

  deletePurlin = (id) => {
    return this.delete(`/api/purlin/${id}`);
  };

  updatePurlin = (id, data) => {
    return this.put(`/api/purlin/${id}`, data);
  };

  createPurlin = (data) => {
    return this.post(`/api/purlin`, data);
  };
}

export const purlinService = new PurlinService();
