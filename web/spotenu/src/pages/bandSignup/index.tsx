import React from "react";
import "./styles.css";
import Input from "../../components/input";
import Header from "../../components/header";

const BandSignup: React.FC = () => {
  return (
    <div className="Band-signup">
      <Header />
      <h1>Band up</h1>
      <form>
        <Input name="Name" label="Name" />
        <Input name="Email" label="Email" />
        <Input name="Nickname" label="Nickname" />
        <Input name="Description" label="Description" />
        <Input name="Password" label="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BandSignup;
