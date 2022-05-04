import { baseService } from "./baseService";

export class DoorService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllDoors = () => {
    return this.get("/api/doors");
  };

  getOneDoor = (id) => {
    return this.get(`/api/doors/${id}`);
  };

  deleteDoor = (id) => {
    return this.delete(`/api/doors/${id}`);
  };

  updateDoor = (id, data) => {
    return this.put(`/api/doors/${id}`, data);
  };

  createDoor = (data) => {
    return this.post(`/api/doors`, data);
  };
}

export const doorService = new DoorService();
