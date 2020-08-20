import React from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../global/functions/UseForm";

const UserSignup: React.FC = () => {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
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
    <div className="user">
      <Header />
      <h2>User sign up</h2>
      <form onSubmit={onClickSumbit}>
        <Input label="name" name="name" value={form.name} required onChange={handleInput}/>
        <Input label="email" name="email" value={form.email} required onChange={handleInput}/>
        <Input label="nickname" name="nickname" value={form.nickname} required onChange={handleInput}/>
        <Input label="password" name="password" value={form.password} required onChange={handleInput}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserSignup;
