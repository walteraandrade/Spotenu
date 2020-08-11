import React from "react";
import Input from "../../components/input";
import Header from "../../components/header";

const Login: React.FC = () => {
  return (
    <div className="login">
      <Header />
      <Input name="nickname" label="Nickname" />
      <Input name="password" label="Password" />
    </div>
  );
};

export default Login;
