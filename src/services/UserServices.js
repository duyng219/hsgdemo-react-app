import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor() {
    super();
    console.log();
  }
  login = (dataInfo) => {
    return this.post("/api/users/login", dataInfo);
  };

  register = (dataInfo) => {
    return this.post("/api/users", dataInfo);
  };

  getAllUsers = () => {
    return this.get("/api/users");
  };

  deleteUser = (id) => {
    return this.delete(`/api/users/${id}`);
  };

  getOneUser = (id) => {
    return this.get(`/api/users/${id}`);
  };

  updateUser = (id, dataInfo) => {
    return this.put(`/api/users/${id}`, dataInfo);
  };
}

export const userService = new UserService();
