import React from "react";
import Input from "../../components/Input";
import "./styles.css";
import Header from "../../components/Header";
import { baseUrl } from "../../global/functions/ApiHandler";
import axios from "axios";
import { useForm } from "../../global/functions/UseForm";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();
  const { form, onChange, resetForm } = useForm({
    nickname: "",
    password: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
  };

  const onClickSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = form;
    await axios
      .post(`${baseUrl}users/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.data);
      });

    history.push("/home");
    resetForm();
  };

  return (
    <div className="loginContainer">
      <Header />
      <div className="loginGrid">
        <div className="imgContainer">
          <img
            src="https://images.unsplash.com/photo-1530270392869-7e99d345638f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Vinyl"
          />
          <img
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Guitar"
          />
          <img
            src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
            alt="Vinyl collection"
          />
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Singer"
          />
          <img
            src="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Woman conducting"
          />
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Concert"
          />
          <img
            src="https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt="Banjo"
          />
          <img
            src="https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Violin"
          />
          <img
            src="https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Dancer"
          />
        </div>
        <div className="mobileImgContainer">
          <img
            src="https://images.unsplash.com/photo-1502056618377-f15b18d813b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Singers"
          />
        </div>
        <div className="formContainer">
          <form onSubmit={onClickSubmit}>
            <h2>Login</h2>
            <Input
              name="nickname"
              label="nickname "
              value={form.nickname}
              onChange={handleInput}
              required
            />
            <Input
              type="password"
              name="password"
              label="password "
              value={form.password}
              onChange={handleInput}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
