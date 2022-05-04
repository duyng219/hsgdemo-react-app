import { baseService } from "./baseService";

export class ConstructionSteelService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllConstructionSteel = () => {
    return this.get("/api/constructionsteel");
  };
  getOneConstructionSteel = (id) => {
    return this.get(`/api/constructionSteel/${id}`);
  };

  deleteConstructionSteel = (id) => {
    return this.delete(`/api/constructionSteel/${id}`);
  };

  updateConstructionSteel = (id, data) => {
    return this.put(`/api/constructionSteel/${id}`, data);
  };

  createConstructionSteel = (data) => {
    return this.post(`/api/constructionSteel`, data);
  };
}

export const constructionSteelService = new ConstructionSteelService();
