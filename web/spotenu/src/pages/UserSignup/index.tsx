import React from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import "./styles.css";

const UserSignup: React.FC = () => {
  return (
    <div className="user">
      <Header />
      <h2>User sign up</h2>
      <form>
        <Input label="Name" name="Name" />
        <Input label="Email" name="Email" />
        <Input label="Nickname" name="Nickname" />
        <Input label="Password" name="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserSignup;
