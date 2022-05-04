import { notification } from "antd";
export const notiFunc = (type, message, description = "") => {
  notification[type]({
    message: message,
    description: description,
  });
};
