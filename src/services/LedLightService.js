import { baseService } from "./baseService";

export class LedLightService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllLedLight = () => {
    return this.get("/api/ledLight");
  };

  getOneLedLight = (id) => {
    return this.get(`/api/ledLight/${id}`);
  };

  deleteLedLight = (id) => {
    return this.delete(`/api/ledLight/${id}`);
  };

  updateLedLight = (id, data) => {
    return this.put(`/api/ledLight/${id}`, data);
  };

  createLedLight = (data) => {
    return this.post(`/api/ledLight`, data);
  };
}

export const ledLightService = new LedLightService();
