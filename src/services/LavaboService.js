import { baseService } from "./baseService";

export class LavaboService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllLavabos = () => {
    return this.get("/api/lavabo");
  };

  getOneLavabo = (id) => {
    return this.get(`/api/lavabo/${id}`);
  };

  deleteLavabo = (id) => {
    return this.delete(`/api/lavabo/${id}`);
  };

  updateLavabo = (id, data) => {
    return this.put(`/api/lavabo/${id}`, data);
  };

  createLavabo = (data) => {
    return this.post(`/api/lavabo`, data);
  };
}

export const lavaboService = new LavaboService();
