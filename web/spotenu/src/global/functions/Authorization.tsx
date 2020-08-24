import { useHistory } from "react-router-dom";
const history = useHistory();

export const authorization = () => {
  const token = window.localStorage.getItem("token");
  if (token === null) {
    history.push("/Login");
  }
};
