import { baseService } from "./baseService";

export class SteelPipeService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllSteelPipe = () => {
    return this.get("/api/steelpipe");
  };
  getOneSteelPipe = (id) => {
    return this.get(`/api/steelPipe/${id}`);
  };

  deleteSteelPipe = (id) => {
    return this.delete(`/api/steelPipe/${id}`);
  };

  updateSteelPipe = (id, data) => {
    return this.put(`/api/steelPipe/${id}`, data);
  };

  createSteelPipe = (data) => {
    return this.post(`/api/steelPipe`, data);
  };
}

export const steelPipeService = new SteelPipeService();
