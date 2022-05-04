import { baseService } from "./baseService";

export class HouseService extends baseService {
  constructor() {
    super();
    console.log();
  }
  getAllHouse = () => {
    return this.get("/api/house");
  };

  getOneHouse = (id) => {
    return this.get(`/api/house/${id}`);
  };
}

export const houseService = new HouseService();
