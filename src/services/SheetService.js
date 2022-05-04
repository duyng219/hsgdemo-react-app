import { baseService } from "./baseService";

export class SheetService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllSheet = () => {
    return this.get("/api/sheet");
  };
  getOneSheet = (id) => {
    return this.get(`/api/sheet/${id}`);
  };

  deleteSheet = (id) => {
    return this.delete(`/api/sheet/${id}`);
  };

  updateSheet = (id, data) => {
    return this.put(`/api/sheet/${id}`, data);
  };

  createSheet = (data) => {
    return this.post(`/api/sheet`, data);
  };
}

export const sheetService = new SheetService();
