import React from "react";
import Header from "../../components/header";
import Input from "../../components/input";

const AdmSignUp: React.FC = () => {
  return (
    <div className="container">
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

export default AdmSignUp;
