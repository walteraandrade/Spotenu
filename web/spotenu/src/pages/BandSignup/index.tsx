import React, { useState } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../global/functions/UseForm";
import axios from "axios";
import { baseUrl } from "../../global/functions/ApiHandler";

const BandSignup: React.FC = () => {
  const history = useHistory();

  const [descriptionText, setDescriptionText] = useState("");

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const handleDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescriptionText(e.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
  };

  const onClickSumbit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const description = descriptionText as string;
    const body = { ...form, description, type: "BAND" };

    await axios
      .post(`${baseUrl}users/signup`, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });

    history.push("/home");
  };
  return (
    <div className="band">
      <Header />
      <h2>Band sign up</h2>
      <form onSubmit={onClickSumbit}>
        <Input
          label="name"
          name="name"
          value={form.name}
          onChange={handleInput}
          required
        />
        <Input
          label="email"
          name="email"
          value={form.email}
          onChange={handleInput}
          required
        />
        <Input
          label="nickname"
          name="nickname"
          value={form.nickname}
          onChange={handleInput}
          required
        />
        <Input
          type="password"
          label="password"
          name="password"
          value={form.password}
          onChange={handleInput}
          required
        />
        <p>description:</p>
        <textarea
          name="description"
          value={descriptionText}
          onChange={handleDescription}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BandSignup;
