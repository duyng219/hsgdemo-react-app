import { baseService } from "./baseService";

export class FloorBrickService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllFloorBrick = () => {
    return this.get("/api/floorBrick");
  };
  getOneFloorBrick = (id) => {
    return this.get(`/api/floorBrick/${id}`);
  };

  deleteFloorBrick = (id) => {
    return this.delete(`/api/floorBrick/${id}`);
  };

  updateFloorBrick = (id, data) => {
    return this.put(`/api/floorBrick/${id}`, data);
  };

  createFloorBrick = (data) => {
    return this.post(`/api/floorBrick`, data);
  };
}

export const floorBrickService = new FloorBrickService();
