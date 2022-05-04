import { baseService } from "./baseService";

export class PlasticPipeService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllPlasticPipe = () => {
    return this.get("/api/plasticPipe");
  };
  getOnePlasticPipe = (id) => {
    return this.get(`/api/plasticPipe/${id}`);
  };

  deletePlasticPipe = (id) => {
    return this.delete(`/api/plasticPipe/${id}`);
  };

  updatePlasticPipe = (id, data) => {
    return this.put(`/api/plasticPipe/${id}`, data);
  };

  createPlasticPipe = (data) => {
    return this.post(`/api/plasticPipe`, data);
  };
}

export const plasticPipeService = new PlasticPipeService();
