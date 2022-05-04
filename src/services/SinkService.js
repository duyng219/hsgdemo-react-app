import { baseService } from "./baseService";

export class SinkService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllSink = () => {
    return this.get("/api/sink");
  };
  getOneSink = (id) => {
    return this.get(`/api/sink/${id}`);
  };

  deleteSink = (id) => {
    return this.delete(`/api/sink/${id}`);
  };

  updateSink = (id, data) => {
    return this.put(`/api/sink/${id}`, data);
  };

  createSink = (data) => {
    return this.post(`/api/sink`, data);
  };
}

export const sinkService = new SinkService();
