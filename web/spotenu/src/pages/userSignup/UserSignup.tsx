import React, { HTMLAttributes } from "react";
import "./styles.css";
import Input from "../../components/input";
import Header from "../../components/header";

const UserSignup: React.FC = () => {
  return (
    <div className="user-signup">
      <Header />
      <h1>Sign up</h1>
      <form>
        <Input name="Name" label="Name" />
        <Input name="Email" label="Email" />
        <Input name="Nickname" label="Nickname" />
        <Input name="Password" label="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserSignup;
