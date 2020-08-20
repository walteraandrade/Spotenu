import React, { useState, SyntheticEvent } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../global/functions/UseForm";

const BandSignup: React.FC = () => {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    description: "",
    password: ""
  })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
  
  }
  
  const onClickSumbit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log(form)
  }
  return (
    
    <div className="band">
      <Header />
      <h2>Band sign up</h2>
      <form onSubmit={onClickSumbit}>
        <Input label="name" name="name" value={form.name} onChange={handleInput} required />
        <Input label="email" name="email" value={form.email} onChange={handleInput}  required />
        <Input label="nickname" name="nickname" value={form.nickname} onChange={handleInput}  required />
        <Input label="description" name="description" value={form.description} onChange={handleInput} required />
        <Input label="password" name="password" value={form.password} onChange={handleInput} required />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BandSignup;
