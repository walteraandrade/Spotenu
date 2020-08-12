import React from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import "./styles.css";

const BandSignup: React.FC = () => {
  return (
    <div className="band">
      <Header />
      <h2>Band sign up</h2>
      <form>
        <Input label="Name" name="Name" />
        <Input label="Email" name="Email" />
        <Input label="Nickname" name="Nickname" />
        <Input label="Description" name="Description" />
        <Input label="Password" name="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BandSignup;
