import { baseService } from "./baseService";

export class PaintService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllPaint = () => {
    return this.get("/api/paint");
  };
  getOnePaint = (id) => {
    return this.get(`/api/paint/${id}`);
  };

  deletePaint = (id) => {
    return this.delete(`/api/paint/${id}`);
  };

  updatePaint = (id, data) => {
    return this.put(`/api/paint/${id}`, data);
  };

  createPaint = (data) => {
    return this.post(`/api/paint`, data);
  };
}

export const paintService = new PaintService();
