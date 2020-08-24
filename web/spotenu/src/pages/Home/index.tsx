import React, { useEffect } from "react";
import Header from "../../components/Header";
import { authentification } from "../../global/functions/Authentification";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    authentification(history);
  }, []);

  return (
    <div>
      <Header />
      <p>Home</p>
      <input />
      <button>Button</button>
    </div>
  );
};

export default Home;
