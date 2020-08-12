import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "./styles.css";

const AdminSignup: React.FC = () => {
  return (
    <div className="admin">
      <Header />
      <h2>Administrator sign up</h2>
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

export default AdminSignup;
