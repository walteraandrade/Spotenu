import axios from "axios";
import { Form } from "./UseForm";

const baseUrl = "https://3pvog899ll.execute-api.us-east-1.amazonaws.com/dev/";

export const login = async (form: Form) => {
  const body = form;
  const response = await axios
    .post(`${baseUrl}/users/login`, body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });

  return response;
};
