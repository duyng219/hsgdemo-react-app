import { baseService } from "./baseService";

export class InteriorBrickService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllInteriorBrick = () => {
    return this.get("/api/interiorBrick");
  };
  getOneInteriorBrick = (id) => {
    return this.get(`/api/interiorBrick/${id}`);
  };

  deleteInteriorBrick = (id) => {
    return this.delete(`/api/interiorBrick/${id}`);
  };

  updateInteriorBrick = (id, data) => {
    return this.put(`/api/interiorBrick/${id}`, data);
  };

  createInteriorBrick = (data) => {
    return this.post(`/api/interiorBrick`, data);
  };
}

export const interiorBrickService = new InteriorBrickService();
