import { baseService } from "./baseService";

export class SwitchService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllSwitch = () => {
    return this.get("/api/switch");
  };
  getOneSwitch = (id) => {
    return this.get(`/api/switch/${id}`);
  };

  deleteSwitch = (id) => {
    return this.delete(`/api/switch/${id}`);
  };

  updateSwitch = (id, data) => {
    return this.put(`/api/switch/${id}`, data);
  };

  createSwitch = (data) => {
    return this.post(`/api/switch`, data);
  };
}

export const switchService = new SwitchService();
