import axios from "axios";
import { API_LINK } from "../utils/settings/config";

export class baseService {
  get = (url) => {
    return axios({
      url: `${API_LINK}${url}`,
      method: "GET",
    });
  };

  post = (url, model) => {
    return axios({
      url: `${API_LINK}${url}`,
      method: "POST",
      data: model,
    });
  };

  put = (url, model) => {
    return axios({
      url: `${API_LINK}${url}`,
      method: "PUT",
      data: model,
    });
  };

  delete = (url) => {
    return axios({
      url: `${API_LINK}${url}`,
      method: "DELETE",
    });
  };
}
