import { baseService } from "./baseService";

export class InteriorPaintService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllInteriorPaint = () => {
    return this.get("/api/interiorPaint");
  };
  getOneInteriorPaint = (id) => {
    return this.get(`/api/interiorPaint/${id}`);
  };

  deleteInteriorPaint = (id) => {
    return this.delete(`/api/interiorPaint/${id}`);
  };

  updateInteriorPaint = (id, data) => {
    return this.put(`/api/interiorPaint/${id}`, data);
  };

  createInteriorPaint = (data) => {
    return this.post(`/api/interiorPaint`, data);
  };
}

export const interiorPaintService = new InteriorPaintService();
