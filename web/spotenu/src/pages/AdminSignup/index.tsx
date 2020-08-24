import React, { useEffect } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "./styles.css";
import { useHistory } from "react-router";
import { useForm } from "../../global/functions/UseForm";
import axios from "axios";
import { baseUrl } from "../../global/functions/ApiHandler";

const AdminSignup: React.FC = () => {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
  };

  const onClickSumbit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const body = { ...form, type: "ADMIN" };

    axios.post(`${baseUrl}users/signup`, body);
  };

  return (
    <div className="admin">
      <Header />
      <h2>Administrator sign up</h2>
      <form>
        <Input
          label="name"
          name="name"
          value={form.name}
          required
          onChange={handleInput}
        />
        <Input
          label="email"
          name="email"
          value={form.email}
          required
          onChange={handleInput}
        />
        <Input
          label="nickname"
          name="nickname"
          value={form.nickname}
          required
          onChange={handleInput}
        />
        <Input
          type="password"
          label="password"
          name="password"
          value={form.password}
          required
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdminSignup;
