import React from "react";
import "./styles.css";
import Header from "../../components/header";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <h1>Home</h1>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};

export default Home;
