import { baseService } from "./baseService";

export class WaterHeaterService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllWaterHeater = () => {
    return this.get("/api/waterheater");
  };
  getOneWaterHeater = (id) => {
    return this.get(`/api/waterHeater/${id}`);
  };

  deleteWaterHeater = (id) => {
    return this.delete(`/api/waterHeater/${id}`);
  };

  updateWaterHeater = (id, data) => {
    return this.put(`/api/waterHeater/${id}`, data);
  };

  createWaterHeater = (data) => {
    return this.post(`/api/waterHeater`, data);
  };
}

export const waterHeaterService = new WaterHeaterService();
